import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Header = (props) => {

const { location: {pathname} } = props;

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
     { pathname === '/personage' && <li>
        <a className="active">Детали персонажа</a>
      </li> }
    </ul>
   </div>
  );
}

export default withRouter(Header);
