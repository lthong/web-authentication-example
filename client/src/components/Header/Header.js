import React, { useCallback } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from 'actions/auth';

const Header = ({ logout }) => {
  const history = useHistory();
  const onLogout = useCallback(() => {
    logout();
    history.push('/login');
  }, [logout, history]);

  return (
    <div className='header'>
      <NavLink exact to='/' activeClassName='active'>
        Home
      </NavLink>
      <div className='right-navs'>
        <div className='logout' onClick={onLogout}>
          Logout
        </div>
      </div>
    </div>
  );
};

export default connect(null, {
  logout,
})(Header);
