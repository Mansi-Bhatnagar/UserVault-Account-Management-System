import { useState } from "react";
import background from "../../Assets/istockphoto-1395448518-612x612.jpg";
import checkImg from "../../Assets/check.svg";
import classes from "./Login.module.css";
const Login = () => {
  const [check, setCheck] = useState(false);
  const checkHandler = () => {
    setCheck((prev) => !prev);
  };
  return (
    <div className={classes.container}>
      <div
        className={classes.register}
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className={classes.backShadow}>
          <h1>
            We haven't
            <br /> met before right?
          </h1>
          <div className={classes.line} />
          <h3>Then you should try us!</h3>
          <p>
            Join thousands of satisfied users who have revolutionized their
            account management processes with <span> User Vault</span>. Sign up
            now to experience the convenience and efficiency firsthand!
          </p>
          <button className={classes.registerBtn}>Register</button>
        </div>
      </div>
      <div className={classes.login}>
        <h1>
          Welcome to <br />
          <span>User Vault!</span>
        </h1>
        <form>
          <div className={classes.inputBox}>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className={classes.inputBox}>
            <input type="password" required />
            <label>Password</label>
          </div>
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
          <button className={classes.loginBtn}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
