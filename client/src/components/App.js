import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'components/Home';
import Login from 'components/Login';
import 'stylesheets/app.scss';

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
};

export default App;
