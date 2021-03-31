import { NavLink } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import HeaderLogo from "../../images/Header/header__logo.svg";
import burgerIcon from "../../images/Header/burger.svg";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext } from 'react';

function Header({ burgerMenuOpen, burgerMenuClose, type }) {
  const currentUser = useContext(CurrentUserContext);
  const loggedIn = !!currentUser.email;

  return (
    <header className={type === "landing" ? "header header_landing" : "header header_movie"}>
      <NavLink className="header__logo-link" to="/">
        <img className="header__logo" src={HeaderLogo} alt="Логотип" />
      </NavLink>
      <div className="header__menu">
        <Navigation loggedIn={loggedIn} />
      </div>
      <div className="header__burger-menu">
        {loggedIn ? (
          <button className="header__burger-menu-open" onClick={burgerMenuOpen}>
            <img src={burgerIcon} className="header__burger-menu-open-logo" alt="Иконка меню" />
          </button>
        ) : (
            <Navigation
              loggedIn={loggedIn}
              burgerMenuOpen={burgerMenuOpen}
              burgerMenuClose={burgerMenuClose} />
          )}
      </div>
    </header>
  );
}

export default Header;
