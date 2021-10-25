import classes from "./index.module.css";
import Input from "../components/input/index";
import Button from "../components/button/index";
import { useState } from "react";

function Login() {
  // useState
  return (
    <div className={classes.container}>
      <h1>Login</h1>

      <form>
        <div className={classes.formGroup}>
          <label for="email">Email:</label>
          <Input type="email" />
        </div>
        <div>
          <label for="password">Password:</label>
          <Input type="password" />
        </div>

        <Button val="Login" />
      </form>
    </div>
  );
}

export default Login;
