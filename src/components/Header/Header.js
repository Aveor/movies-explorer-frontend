import React from "react";

import "./Header.css";
import Navigation from "../Navigation/Navigation";
import HeaderLogo from "../../images/Header/header__logo.svg";
import burgerIcon from "../../images/Header/burger.svg";

function Header({ isLogged }) {
  const burger = document.querySelector(".burger");

  function handlePopupOpen() {
    burger.classList.add("burger_opened");
  }

  return (
    <header className={isLogged ? "header header_movie" : "header header_landing"}>
      <a className="header__logo-link" href="./">
        <img
          className="header__logo"
          src={HeaderLogo}
          alt="Логотип"
        />
      </a>
      <div className="header__menu">
        <Navigation isLogged={isLogged} />
      </div>
      <div className="header__burger-menu">
        {isLogged ? (
          <button className="header__burger-menu-open">
            <img
              src={burgerIcon}
              className="header__burger-menu-open-logo"
              alt="Иконка меню"
              onClick={handlePopupOpen}
            />
          </button>
        ) : (
            <Navigation isLogged={isLogged} />
          )}
      </div>
    </header>
  );
}

export default Header;
