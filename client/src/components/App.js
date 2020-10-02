import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'components/Home';
import Login from 'components/Login';
import Signup from 'components/Signup';
import 'stylesheets/app.scss';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
      </Switch>
    </div>
  );
};

export default App;
