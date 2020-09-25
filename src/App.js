import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import LogIn from './components/pages/LogIn';
import SignUp from './components/pages/SignUp';
import UserProfile from './components/pages/UserProfile';

function App() {
  return (
    <div className='container'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <LogIn/>
          </Route>
          <Route path='/signup'>
            <SignUp/>
          </Route>
          <Route path='/profile'>
            <Redirect to='/'/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
