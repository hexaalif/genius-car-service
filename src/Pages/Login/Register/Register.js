import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
  };

  return (
    <div className="register-form">
      <h2 className="text-center text-info">Please Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="" placeholder="Your Name" /> <br />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Your Email"
          required
        />{" "}
        <br />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Type password"
          required
        />
        <br />
        <input type="submit" value="Register" />
      </form>
      <p>
        Already Registered?{" "}
        <Link
          to="/login"
          className="text-danger text-decoration-none"
          onClick={navigateLogin}
        >
          Please Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
