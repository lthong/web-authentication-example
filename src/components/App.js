import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import 'stylesheets/app.scss';

const App = () => {
  return (
    <div className="app">
      <div className="nav">
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/comments" activeClassName="active">
          Comments
        </NavLink>
      </div>
      <Switch>
        <Route exact path="/" component={CommentBox} />
        <Route path="/comments" component={CommentList} />
      </Switch>
    </div>
  );
};

export default App;
