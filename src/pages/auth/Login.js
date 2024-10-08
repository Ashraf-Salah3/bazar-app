import React, { useRef, useState } from 'react';
import { loginImg } from '../../assest';
import classes from "./auth.module.css"
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa6';
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../../firebase/firebase.config';
import Loader from '../../component/loader/Loader';

function Login() {
  const emailInputRef = useRef('');
  const passwordInputRef = useRef('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (!validateEmail(enteredEmail)) {
      toast.error('Please enter a valid email.');
      return;
    }

    if (enteredPassword.trim().length === 0) {
      toast.error('Please enter your password.');
      return;
    }

    setIsLoading(true);

    signInWithEmailAndPassword(auth, enteredEmail, enteredPassword)
      .then((userCredential) => {
        setIsLoading(false);
        navigate('/');
        toast.success('Login Successful...');
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };

  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        toast.success('Login Successfully');
        navigate("/"); 
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <section className={classes.auth}>
      {isLoading && <Loader />}
      <div className={classes.img}>
        <img src={loginImg} alt="login" width="400" />
      </div>
      <div className={classes.form}>
        <h2>Login</h2>
        <form onSubmit={submitFormHandler}>
          <input type="email" placeholder="Email" ref={emailInputRef} required />
          <input type="password" placeholder="Password" ref={passwordInputRef} required />
          <button className="--btn --btn-primary --btn-block">
            Login
          </button>

          <div className={classes.links}>
            <Link to="/rest">Reset Password</Link>
          </div>
          <p>--or--</p>
        </form>
        <button onClick={signInWithGoogle} className="--btn --btn-danger --btn-block">
          <FaGoogle /> Login with Google
        </button>
        <div className={classes.register}>
          <p>Don't have an account? </p>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </section>
  );
}

export default Login;
