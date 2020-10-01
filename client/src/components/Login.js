import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  const onLogin = useCallback((e) => {
    e.preventDefault();
    history.push('/');
  }, []);

  return (
    <div className="login">
      <form onSubmit={onLogin}>
        <div className="title">Welcome</div>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" required />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
