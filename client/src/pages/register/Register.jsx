import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label htmlFor="">UserName</label>
        <input type="text" placeholder="Enter your username" />
        <label htmlFor="">Email</label>
        <input type="text" placeholder="Enter your email" />
        <label htmlFor="">Password</label>
        <input type="Password" placeholder="Enter your password" />
        <button className="registerBtn">register</button>
      </form>
      <button className="registerLoginBtn">
      <Link className="link" to="/login">Login</Link>

      </button>
    </div>
  );
};

export default Register;
