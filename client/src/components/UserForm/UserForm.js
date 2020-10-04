import React, { useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const UserForm = ({
  className = '',
  title = 'Welcome',
  formType,
  onSubmit,
  authErrMsg,
}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const customContent = useMemo(
    () =>
      formType === 'login' && (
        <div className='links'>
          <Link to='/signup'>Signup</Link>
          <span className='partition'>|</span>
          <Link to='/?isForDemo=true'>Skip</Link>
        </div>
      ),
    [formType]
  );

  const onFormDataChange = useCallback(({ target: { id: key, value } }) => {
    setFormData((prevState) => ({ ...prevState, [key]: value }));
  }, []);

  const onFormSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onSubmit(formData);
    },
    [onSubmit, formData]
  );

  return (
    <div className={`user-form ${className}`}>
      <form onSubmit={onFormSubmit}>
        <div className='title'>{title}</div>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          type='email'
          value={formData.email}
          onChange={onFormDataChange}
          required
        />
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          type='password'
          value={formData.password}
          onChange={onFormDataChange}
          required
        />
        <div className='err'>{authErrMsg}</div>
        <button type='submit'>Submit</button>
        {customContent}
      </form>
    </div>
  );
};

export default connect((state) => ({
  authErrMsg: state.auth.authErrMsg,
}))(UserForm);
