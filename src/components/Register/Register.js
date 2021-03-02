import React from 'react';
import './Register.css';
import headerLogo from '../../images/Header/header__logo.svg';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <section className="form">
      <div className="form__container">
        <a className="form__logo-link" href="./"><img className="form__logo" src={headerLogo} alt="Логотип" /></a>
        <form className="form__form">
          <h1 className="form__title">Добро пожаловать!</h1>
          <p className="form__input-name">Имя</p>
          <input type="text" className="form__input" minLength="2" maxLength="30" required />
          <span id="register-input-error" className="form__input-error"></span>
          <p className="form__input-name">E-mail</p>
          <input type="email" className="form__input" required />
          <span id="register-input-error" className="form__input-error"></span>
          <p className="form__input-name">Пароль</p>
          <input type="password" className="form__input" minLength="4" maxLength="30" required />
          <span id="register-input-error" className="form__input-error"></span>
          <button type="submit" className="form__submit-button">Зарегистрироваться</button>
          <div className="form__question-container">
            <p className="form__question-text">Уже зарегистрированы?</p>
            <Link to="/signin" className="form__link-to-signin">Войти</Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Register;