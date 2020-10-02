import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <NavLink exact to='/' activeClassName='active'>
        Home
      </NavLink>
      <div className='right-navs'>
        <NavLink to='/login' activeClassName='active' className='logout'>
          Logout
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
