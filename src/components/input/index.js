import classes from "./index.module.css";

function Input(props) {
  return (
    <input
      className={classes.input}
      type={props.type}
      id={props.type}
      name={props.type}
    />
  );
}

export default Input;
