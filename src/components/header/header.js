import React from 'react';
import './header.css';

const Header = () => (
  <header className="header box">
    <h1 className="header__title">StarDB</h1>
    <ul className="header__list">
      <li className="header__list-item">
        <a className="header__link" href="http://">People</a>
      </li>
      <li className="header__list-item">
        <a className="header__link" href="http://">Planets</a>
      </li>
      <li className="header__list-item">
        <a className="header__link" href="http://">Starships</a>
      </li>
    </ul>
  </header>
);

export default Header;
