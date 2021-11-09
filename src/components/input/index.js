import classes from "./index.module.css";

function Input(props) {
  return (
    <input
      className={(classes.input, props.styling)}
      type={props.type}
      id={props.type}
      name={props.type}
      value={props.value}
      onChange={(e) => {
        props.change(e.target.value);
      }}
    />
  );
}

export default Input;
