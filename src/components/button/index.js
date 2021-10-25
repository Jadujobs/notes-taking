import classes from "./index.module.css";

function Input(props) {
  return <button className={classes.btn}>{props.val}</button>;
}

export default Input;
