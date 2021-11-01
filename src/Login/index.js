import classes from "./index.module.css";
import Input from "../components/input/index";
import Button from "../components/button/index";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className={classes.container}>
      <h1>Login</h1>

      <form onSubmit={loginHandler}>
        <div className={classes.formGroup}>
          <label htmlFor="email">Email:</label>
          <Input type="email" value={email} change={setEmail} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <Input type="password" value={password} change={setPassword} />
        </div>

        <Button val="Login" />
      </form>

      <Link to="/signup">Register Now!</Link>
    </div>
  );
}

export default Login;
