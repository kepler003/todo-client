import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import AppContext from './contexts/AppContext';

import PrivateRoute from './components/routes/PrivateRoute';
import PublicRoute from './components/routes/PublicRoute';
import LogIn from './components/pages/LogIn';
import SignUp from './components/pages/SignUp';
import UserProfile from './components/pages/UserProfile';

function App() {
  
  const [context, setContext] = useState({
    user: {
      id: null,
      username: null
    },
    notes: null
  });

  return (
    <div className='container'>
      <AppContext.Provider value={{context, setContext}}>
        <Router>
          <PublicRoute exact path='/' redirectPath='/profile'>
            <LogIn/>
          </PublicRoute>
          <PublicRoute path='/signup' redirectPath='/profile'>
            <SignUp/>
          </PublicRoute>
          <PrivateRoute path='/profile' redirectPath='/'>
            <UserProfile/>
          </PrivateRoute>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
