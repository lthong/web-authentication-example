import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="nav">
      <NavLink exact to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/login" activeClassName="active" className="logout">
        Logout
      </NavLink>
    </div>
  );
};

export default Header;
