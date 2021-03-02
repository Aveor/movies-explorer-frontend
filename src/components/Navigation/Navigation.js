import "./Navigation.css";
import accountLogo from "../../images/Navigation/account-logo.svg";

function Navigation({ isLogged }) {
  return isLogged ? (
    <nav className="nav__container">
      <ul className="nav__sign">
        <li className="nav__movies">
          <a className="nav__link nav__link_main" href="./">
            Главная
          </a>
        </li>
        <li className="nav__movies">
          <a className="nav__link" href="./movies">
            Фильмы
          </a>
        </li>
        <li className="nav__saved-movies">
          <a className="nav__link" href="./saved-movies">
            Сохранённые фильмы
          </a>
        </li>
        <li className="nav__account">
          <a className="nav__link" href="./profile">
            <img src={accountLogo} alt="Личный кабинет" />
          </a>
        </li>
      </ul>
    </nav>
  ) : (
      <nav className="nav__container-unlogged">
        <ul className="nav__sign_unlogged">
          <li className="nav__signup">
            <a className="nav__link-unlogged" href="./signup">
              Регистрация
          </a>
          </li>
          <li className="nav__signin-box">
            <a className="nav__link-unlogged" href="./signin">
              <p className="nav__signin-text">Войти</p>
            </a>
          </li>
        </ul>
      </nav>
    );
}

export default Navigation;
