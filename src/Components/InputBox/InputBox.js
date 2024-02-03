import classes from "./InputBox.module.css";
const InputBox = (props) => {
  return (
    <div className={classes.inputBox}>
      <input
        type={props.type}
        required={props.required}
        minLength={props.minLength}
        maxLength={props.maxLength}
        onChange={props.onChange}
        value={props.value}
        autoComplete={props.autoComplete}
      />
      <label>{props.label}</label>
    </div>
  );
};

export default InputBox;
