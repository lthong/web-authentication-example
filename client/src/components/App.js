import React, { useMemo } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import querystring from 'querystring';
import Home from 'components/Home';
import Login from 'components/Login';
import Signup from 'components/Signup';
import 'stylesheets/app.scss';

const App = ({ token }) => {
  const location = useLocation();
  const isForDemo = useMemo(
    () =>
      location.search && querystring.parse(location.search.substr(1)).isForDemo,
    [location]
  );
  const isLogin = useMemo(() => !!token || isForDemo, [token, isForDemo]);

  return (
    <div>
      <Switch>
        <Route exact path='/'>
          {isLogin ? <Home /> : <Redirect to='/login' />}
        </Route>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
      </Switch>
    </div>
  );
};

export default connect((state) => ({
  token: state.auth.token,
}))(App);
