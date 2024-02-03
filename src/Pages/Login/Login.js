import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterInfo from "../../Components/RegisterInfo/RegisterInfo";
import checkImg from "../../Assets/check.svg";
import classes from "./Login.module.css";
import InputBox from "../../Components/InputBox/InputBox";
const Login = () => {
  const navigate = useNavigate();

  //For checking Remember Me Checkbox state
  const [check, setCheck] = useState(localStorage.getItem("check") || false);
  //For Email
  const [email, setEmail] = useState("");
  //For Password
  const [password, setPassword] = useState("");
  //For Validation
  const [error, setError] = useState("");

  //Handlers
  const checkHandler = () => {
    setCheck((prev) => !prev);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const loginHandler = (e) => {
    e.preventDefault();

    //Checking Validations

    if (email === "") {
      setError("Email cannot be blank");
      return;
    }
    if (password === "") {
      setError("Password cannot be blank");
      return;
    }
    if (!localStorage.getItem(email)) {
      setError("Account doesn't exist");
      return;
    } else {
      const information = JSON.parse(localStorage.getItem(email));
      if (information.password !== password) {
        setError("Incorrect password");
        return;
      } else {
        if (check) {
          localStorage.setItem("check", true);
        }
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        navigate("/account_details");
      }
    }
  };

  useEffect(() => {
    //Setting values if Remember Me was checked

    if (localStorage.getItem("email")) {
      setEmail(localStorage.getItem("email"));
    }
    if (localStorage.getItem("password")) {
      setPassword(localStorage.getItem("password"));
    }
    if (localStorage.getItem("check")) {
      setCheck(true);
    }
  }, []);

  return (
    <div className={classes.container}>
      <RegisterInfo showButton={true} />
      <div className={classes.login}>
        <h1>
          Welcome to <br />
          <span>User Vault!</span>
        </h1>
        <form onSubmit={loginHandler}>
          <InputBox
            type={"email"}
            label={"Email"}
            required={true}
            onChange={emailHandler}
            value={email}
          />
          <InputBox
            type={"password"}
            label={"Password"}
            required={true}
            onChange={passwordHandler}
            value={password}
          />
          <div className={classes.checkbox}>
            <div
              className={
                check
                  ? `${classes.filled} ${classes.outerSquare}`
                  : `${classes.notFilled} ${classes.outerSquare}`
              }
              onClick={checkHandler}
            >
              {check ? <img src={checkImg} alt="check" /> : ""}
            </div>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember" onClick={checkHandler}>
              Remember me
            </label>
          </div>
          <p className={classes.error}>{error ? "* " + error : ""}</p>
          <button className={classes.loginBtn} onClick={loginHandler}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
