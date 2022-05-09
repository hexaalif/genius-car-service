import { async } from "@firebase/util";
import React, { useRef } from "react";
import { Button, Form, Toast } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from "react-bootstrap";
import "react-toastify";
import axios from "axios";

const Login = () => {
  const emailRef = useRef("");
  const passRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let errorElement;
  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;

    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post("http://localhost:5000/login", { email });
    console.log(data);
  };

  if (loading || sending) {
    return <Loading></Loading>;
  }

  if (user) {
    // navigate(from, { replace: true });
  }

  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error?.message} </p>
      </div>
    );
  }

  const navigateRegister = (e) => {
    navigate(`/register`);
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      Toast("Sent email");
    } else {
      Toast("please enter the email");
    }
  };

  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-primary text-center">Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            required
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passRef}
            type="password"
            required
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary w-50 d-block mx-auto my-3" type="submit">
          Login
        </Button>
      </Form>
      {errorElement}
      <p>
        New to Genius Car?{" "}
        <Link
          to="/register"
          className="text-info text-decoration-none"
          onClick={navigateRegister}
        >
          Please Register
        </Link>
      </p>
      <p>
        Forgot Password?{" "}
        <Button
          className="text-info text-decoration-none btn bg-white border-0 "
          onClick={resetPassword}
        >
          Reset Password
        </Button>
      </p>
      <SocialLogin></SocialLogin>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
