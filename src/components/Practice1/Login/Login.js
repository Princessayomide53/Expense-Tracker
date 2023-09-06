import React, { useState } from "react";
import Card1 from "../../UI/Card1";
import Button from "../../UI/Button";

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailValid, setEmailValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState();

  const emailHandler = (e) => {
    setEnteredEmail(e.target.value);
    setFormIsValid(
      e.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  };

  const passwordHandler = (e) => {
    setEnteredPassword(e.target.value);
    setFormIsValid(
      e.target.value.trim().length > 6 && enteredEmail.includes("@")
    );
  };

  const validateEmail = () => {
    setEmailValid(enteredEmail.includes("@"));
  };

  const validatePassword = () => {
    setPasswordValid(enteredPassword.trim().length > 6);
  };

  const submitForm = (e) => {
    e.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
    // console.log(enteredEmail, enteredPassword);
  };

  return (
    <Card1 className="max-w-[40rem] w-[50vw] h-64 bg-pink-200 rounded-xl shadow-2xl m-auto">
      <form onSubmit={submitForm}>
        <div className={`flex-col flex p-7 space-y-10`}>
          <div className={`block space-x-16 `}>
            <label htmlFor="E-mail" className="font-bold">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              value={enteredEmail}
              className={`w-[80%] rounded-lg py-2 pl-3 border-2 border-purple-400 ${
                emailValid === false
                  ? "border-red-600 border-2 focus:bg-red-500"
                  : ""
              }`}
              onChange={emailHandler}
              onBlur={validateEmail}
            />
          </div>
          <div className={`flex space-x-10`}>
            <label htmlFor="Password" className="font-bold">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={enteredPassword}
              className={`w-[80%] rounded-lg py-2 pl-3 border-2 border-purple-400 ${
                passwordValid === false
                  ? "border-red-600 border-2 focus:bg-red-500 "
                  : ""
              }`}
              onChange={passwordHandler}
              onBlur={validatePassword}
            />
          </div>
        </div>
        <Button type="submit" disabled={!formIsValid}>
          {" "}
          Login
        </Button>
      </form>
    </Card1>
  );
};

export default Login;
