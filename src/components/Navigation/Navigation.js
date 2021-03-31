import { NavLink } from "react-router-dom";
import "./Navigation.css";
import accountLogo from "../../images/Navigation/account-logo.svg";

function Navigation({ loggedIn, burgerMenuClose }) {
  return loggedIn ? (
    <nav className="nav__container">
      <ul className="nav__sign">
        <li className="nav__movies">
          <NavLink className="nav__link nav__link_main" to="/" onClick={burgerMenuClose}>
            Главная
          </NavLink>
        </li>
        <li className="nav__movies">
          <NavLink className="nav__link" to="/movies" onClick={burgerMenuClose}>
            Фильмы
          </NavLink>
        </li>
        <li className="nav__saved-movies">
          <NavLink className="nav__link" to="/saved-movies" onClick={burgerMenuClose}>
            Сохранённые фильмы
          </NavLink>
        </li>
        <li className="nav__account">
          <NavLink className="nav__link" to="/profile" onClick={burgerMenuClose}>
            <img src={accountLogo} alt="Личный кабинет" />
          </NavLink>
        </li>
      </ul>
    </nav>
  ) : (
      <nav className="nav__container-unlogged">
        <ul className="nav__sign_unlogged">
          <li className="nav__signup">
            <NavLink className="nav__link-unlogged" to="/signup">
              Регистрация
          </NavLink>
          </li>
          <li className="nav__signin-box">
            <NavLink className="nav__link-unlogged" to="/signin">
              <p className="nav__signin-text">Войти</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    );
}

export default Navigation;
