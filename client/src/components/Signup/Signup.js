import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import UserForm from 'components/UserForm';

const Signup = () => {
  const history = useHistory();
  const onSignup = useCallback(
    (e) => {
      e.preventDefault();
      history.push('/');
    },
    [history]
  );

  return <UserForm title='Sign up' formType='signup' onSubmit={onSignup} />;
};

export default Signup;
