import React from 'react';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import 'stylesheets/app.scss';

const App = () => {
  return (
    <div className="app">
      <CommentBox />
      <CommentList />
    </div>
  );
};

export default App;
