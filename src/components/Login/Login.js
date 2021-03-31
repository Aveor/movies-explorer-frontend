import React from 'react';
import Form from "../Form/Form";

function Login({ login, serverError, resetErrorMessage }) {
  return (
    <Form
      logOption={"Войти"}
      title={"Рады видеть!"}
      type="login"
      serverError={serverError}
      onSubmit={login}
      resetErrorMessage={resetErrorMessage}
    ></Form>
  );
}

export default Login;
