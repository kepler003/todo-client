import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import AppContext from './contexts/AppContext';

import LogIn from './components/pages/LogIn';
import SignUp from './components/pages/SignUp';
import UserProfile from './components/pages/UserProfile';

function App() {
  const [context, setContext] = useState({
    user: {
      id: 1,
      username: "Kepler003"
    },
    notes: [
      {id: 1, body: 'Wyprowadzić psa'},
      {id: 2, body: 'Zrobić zakupy'},
      {id: 3, body: 'Pozmywać naczynia'},
      {id: 4, body: 'Zadzwonić do mamy'},
      {id: 5, body: 'Skosić trawnik'},
    ]
  });

  return (
    <div className='container'>
      <AppContext.Provider value={{context, setContext}}>
        <Router>
          <Switch>
            <Route exact path='/'>
              <LogIn/>
            </Route>
            <Route path='/signup'>
              <SignUp/>
            </Route>
            <Route path='/profile'>
              <UserProfile/>
            </Route>
          </Switch>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
