import { useNavigate } from "react-router-dom";
import background from "../../Assets/istockphoto-1395448518-612x612.jpg";
import classes from "./RegisterInfo.module.css";

const RegisterInfo = (props) => {
  const navigate = useNavigate();
  const registerHandler = () => {
    navigate("/register");
  };
  return (
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
        {props.showButton ? (
          <button className={classes.registerBtn} onClick={registerHandler}>
            Register
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default RegisterInfo;
