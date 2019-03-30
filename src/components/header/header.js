import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => (
  <header className="header box">
    <Link className="header__logo" to="/">StarDB</Link>
    <ul className="header__list">
      <li className="header__list-item">
        <Link className="header__link" to="/people/">People</Link>
      </li>
      <li className="header__list-item">
        <Link className="header__link" to="/planets/">Planets</Link>
      </li>
      <li className="header__list-item">
        <Link className="header__link" to="/starships/">Starships</Link>
      </li>
    </ul>
  </header>
);

export default Header;
