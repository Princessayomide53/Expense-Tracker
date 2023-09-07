import React, { useEffect, useReducer, useState } from "react";
import Card1 from "../../UI/Card1";
import Button from "../../UI/Button";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.val, isValid: state.val.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }

  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  // const {enteredEmail, setEnteredEmail] = useState("");
  // const [emailValid, setEmailValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordValid, setPasswordValid] = useState();

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    Value: "",
    isValid: null,
  });
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("checking for validity");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);
    //clear timeout on unmounting component
    return () => {
      clearTimeout(identifier);
      console.log("unmounted");
    };
  }, [emailIsValid, passwordIsValid]);

  const emailHandler = (e) => {
    dispatchEmail({ type: "USER_INPUT", val: e.target.value });
    // setFormIsValid();
    // e.target.value.includes("@") && enteredPassword.trim().length > 6
  };

  const passwordHandler = (e) => {
    dispatchPassword({ type: "USER_INPUT", val: e.target.value });
    // setFormIsValid();
    // e.target.value.trim().length > 6 && enteredEmail.includes("@");
  };

  const validateEmail = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
    // setEmailValid(enteredEmail.includes("@"));
  };

  const validatePassword = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitForm = (e) => {
    e.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
    // console.log(enteredEmail, enteredPassword);
    // setEnteredEmail("");
    // setEnteredPassword("");
    // setEmailValid(undefined);
    // setPasswordValid(undefined);
    // setFormIsValid(false);
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
              value={emailState.value}
              className={`w-[80%] rounded-lg py-2 pl-3 border-2 border-purple-400 ${
                emailState.isValid === false
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
              value={passwordState.value}
              className={`w-[80%] rounded-lg py-2 pl-3 border-2 border-purple-400 ${
                passwordState.isValid === false
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
