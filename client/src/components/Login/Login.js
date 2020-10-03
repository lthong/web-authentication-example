import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import UserForm from 'components/UserForm';
import { signin, resetAuthErrMsg } from 'actions/auth';

const Login = ({ signin, resetAuthErrMsg }) => {
  const history = useHistory();
  const onLogin = useCallback(
    (formData) => {
      signin({
        formData,
        cb: () => {
          history.push('/');
        },
      });
    },
    [history, signin]
  );

  useEffect(() => {
    return () => {
      resetAuthErrMsg();
    };
  });

  return <UserForm formType='login' onSubmit={onLogin} />;
};

export default connect(null, {
  signin,
  resetAuthErrMsg,
})(Login);
