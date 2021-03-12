import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Form.css";
import headerLogo from "../../images/Header/header__logo.svg";
import Validation from "../Validation/Validation";

function Form({
  title,
  logOption,
  type,
  serverError,
  onSubmit,
  resetErrorMessage,
}) {
  const { values, handleChange, errors, isValid, resetForm } = Validation();

  const handleLinkClick = () => {
    resetErrorMessage();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__container">
        <a className="form__logo-link" href="./">
          <img className="form__logo" src={headerLogo} alt="Лого сайта" />
        </a>
        <h3 className="form__title">{title}</h3>
        <div className="form__form">
          {type === "register" && (
            <label className="form__input-name">
              Имя
              <input className="form__input" minLength="2" maxLength="30" name="name" type="text" onChange={handleChange} required />
              <span className="form__input-error">
                {errors.name ? errors.name : ""}
              </span>
            </label>
          )}
          <label className="form__input-name">
            E-mail
            <input className="form__input" name="email" type="email" onChange={handleChange} required />
            <span className="form__input-error">
              {errors.email ? errors.email : ""}
            </span>
          </label>
          <label className="form__input-name">
            Пароль
            <input className="form__input" minLength="4" maxLength="30" name="password" type="password" onChange={handleChange} required />
            <span className="form__input-error">
              {errors.password ? errors.password : ""}
            </span>
          </label>
          <span className="form__input-error">
            {serverError}
          </span>
          <button className="form__submit-button" type="submit" disabled={!isValid}>
            {logOption}
          </button>
          <div className="form__question-container">
            {type === "register" ? (
              <p className="form__question-text">
                Уже зарегистрированы?{" "}
                <NavLink className="form__link-to-signin" to="/signin" onClick={handleLinkClick}>
                  Войти
              </NavLink>
              </p>
            ) : (
                <p className="form__question-text">
                  Ещё не зарегистрированы?{" "}
                  <NavLink className="form__link-to-signin" to="/signup" onClick={handleLinkClick}>
                    Регистрация
              </NavLink>
                </p>
              )}
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form;