import React from 'react';
import './Login.css';
import headerLogo from '../../images/Header/header__logo.svg';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <section className="form">
      <div className="form__container">
        <a className="form__logo-link" href="./"><img className="form__logo" src={headerLogo} alt="Логотип" /></a>
        <form className="form__form">
          <h1 className="form__title">Рады видеть!</h1>
          <p className="form__input-name">E-mail</p>
          <input type="email" className="form__input" required />
          <span id="login-input-error" className="form__input-error"></span>
          <p className="form__input-name">Пароль</p>
          <input type="password" className="form__input" minLength="4" maxLength="30" required />
          <span id="login-input-error" className="form__input-error"></span>
          <button type="submit" className="login__submit-button">Войти</button>
          <div className="form__question-container">
            <p className="form__question-text">Ещё не зарегистрированы?</p>
            <Link to="/signup" className="form__link-to-signin">Регистрация</Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;