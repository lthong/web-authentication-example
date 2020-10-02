import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import UserForm from 'components/UserForm';

const Login = () => {
  const history = useHistory();
  const onLogin = useCallback(
    (e) => {
      e.preventDefault();
      history.push('/');
    },
    [history]
  );

  return <UserForm formType='login' onSubmit={onLogin} />;
};

export default Login;
