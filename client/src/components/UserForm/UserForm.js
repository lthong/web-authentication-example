import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

const UserForm = ({
  className = '',
  title = 'Welcome',
  formType,
  onSubmit,
}) => {
  const customContent = useMemo(
    () =>
      formType === 'login' && (
        <div className='links'>
          <Link to='/signup'>Signup</Link>
          <span className='partition'>|</span>
          <Link to='/'>Skip</Link>
        </div>
      ),
    [formType]
  );

  return (
    <div className={`user-form ${className}`}>
      <form onSubmit={onSubmit}>
        <div className='title'>{title}</div>
        <label htmlFor='email'>Email</label>
        <input id='email' type='email' required />
        <label htmlFor='password'>Password</label>
        <input id='password' type='password' required />
        <button type='submit'>Submit</button>
        {customContent}
      </form>
    </div>
  );
};

export default UserForm;
