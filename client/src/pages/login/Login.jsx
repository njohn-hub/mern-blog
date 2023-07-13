import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label htmlFor="">Email</label>
        <input type="text" placeholder="Enter your email" />
        <label htmlFor="">Password</label>
        <input type="Password" placeholder="Enter your password" />
        <button className="loginBtn">Login</button>
      </form>
      <button className="loginRegisterBtn">
        <Link className="link" to="/register">Register</Link>
      </button>
    </div>
  );
};

export default Login;
