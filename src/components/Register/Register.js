import React from "react";
import Form from "../Form/Form";

function Register({ register, serverError, resetErrorMessage }) {
  return (
    <Form
      logOption={"Зарегистрироваться"}
      title={"Добро пожаловать!"}
      type="register"
      serverError={serverError}
      onSubmit={register}
      resetErrorMessage={resetErrorMessage}
    ></Form>
  );
}

export default Register;
