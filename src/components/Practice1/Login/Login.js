import React, {
  useContext,
  useEffect,
  useReducer,
  useState,
  useRef,
} from "react";
import Card1 from "../../UI/Card1";
import Button from "../../UI/Button";
import AuthContext from "../Store/auth-context";
import Input from "../Input/Input";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
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

const Login = () => {
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
    value: "",
    isValid: null,
  });
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;
  const ctx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

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
    if (formIsValid) {
      ctx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card1 className="max-w-[40rem] w-[50vw] h-64 bg-pink-200 rounded-xl shadow-2xl m-auto">
      <form onSubmit={submitForm}>
        <div className={`flex-col flex p-10 space-y-10`}>
          <Input
            ref={emailInputRef}
            id="email"
            type="email"
            label="E-mail"
            isValid={emailState.isValid}
            stateHandle={emailState.value}
            onBlur={validateEmail}
            onChange={emailHandler}
          />
          {/* <div className={`flex space-x-10`}> */}
          <Input
            ref={passwordInputRef}
            id="password"
            type="password"
            label="Password"
            isValid={passwordState.isValid}
            stateHandle={passwordState.value}
            // style={{ margin: "10px" }}
            onBlur={validatePassword}
            onChange={passwordHandler}
            // className="space-x-5"
          />
        </div>
        {/* </div> */}
        <Button type="submit"> Login</Button>
      </form>
    </Card1>
  );
};

export default Login;
