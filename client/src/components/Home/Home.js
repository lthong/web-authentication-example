import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header';
import { getUserGreetings } from 'actions/auth';

const Home = ({ getUserGreetings, token, userGreeting }) => {
  useEffect(() => {
    token && getUserGreetings();
  });

  return (
    <div className='home'>
      <Header />
      <div className='content'>{userGreeting || 'Hello React!'}</div>
    </div>
  );
};

export default connect(
  (state) => ({
    token: state.auth.token,
    userGreeting: state.auth.userGreeting,
  }),
  {
    getUserGreetings,
  }
)(Home);
