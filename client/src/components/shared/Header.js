import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {

  return (
   <div className="header">
    <div className="logo">{`Rick&Morty`}</div>
    <ul className="header-menu">
      <li>
        <NavLink
          exact
          activeClassName = 'active'
          to='/'>Главная</NavLink>
      </li>
      <li>
        <NavLink
         exact
         activeClassName = 'active'
         to='/model'>Верстка блока</NavLink>
      </li>
    </ul>
   </div>
  );
}

export default Header;
