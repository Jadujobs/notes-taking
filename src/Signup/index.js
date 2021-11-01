import classes from "./index.module.css";
import Input from "../components/input/index";
import Button from "../components/button/index";
import { Link } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const signupHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Password not matched!");
      setTimeout(function () {
        setErrorMessage("");
      }, 3000);
      return;
    }

    if (email === "") {
      setErrorMessage("Invalid Email!");
      setTimeout(function () {
        setErrorMessage("");
      }, 3000);
      return;
    }

    setErrorMessage("");

    console.log(email, password);
  };

  return (
    <div className={classes.container}>
      <h1>Signup</h1>

      <p>{errorMessage}</p>
      <form onSubmit={signupHandler}>
        <div className={classes.formGroup}>
          <label htmlFor="email">Email:</label>
          <Input type="email" value={email} change={setEmail} />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="password">Password:</label>
          <Input type="password" value={password} change={setPassword} />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="password">Confirm Password:</label>
          <Input
            type="password"
            value={confirmPassword}
            change={setConfirmPassword}
          />
        </div>

        <Button val="Sign up" />
      </form>

      <Link to="/login">Already have an account!</Link>
    </div>
  );
}

export default Signup;
