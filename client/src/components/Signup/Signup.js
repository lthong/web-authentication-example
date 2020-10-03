import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import UserForm from 'components/UserForm';
import { signup, resetAuthErrMsg } from 'actions/auth';

const Signup = ({ signup, resetAuthErrMsg }) => {
  const history = useHistory();
  const onSignup = useCallback(
    (formData) => {
      signup({
        formData,
        cb: () => {
          history.push('/');
        },
      });
    },
    [history, signup]
  );

  useEffect(() => {
    return () => {
      resetAuthErrMsg();
    };
  });

  return <UserForm title='Signup' formType='signup' onSubmit={onSignup} />;
};

export default connect(null, {
  signup,
  resetAuthErrMsg,
})(Signup);
