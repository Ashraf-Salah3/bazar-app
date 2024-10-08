import React, { useRef, useState } from 'react'
import classes from "./auth.module.css"
import { registerImg } from '../../assest'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-toastify';
import { auth } from '../../firebase/firebase.config';
import Loader from '../../component/loader/Loader';

function Register() {
    const emailInputRef = useRef("")
    const passwordInputRef= useRef("")
    const confirmPasswordRef = useRef("")
    const [isLoading, setIsLoading ] = useState(false)
    const navigate = useNavigate()

    const submitFormHandler = (e) => {
        e.preventDefault();
        const enteredEmail = emailInputRef.current.value
        const enteredPassword = passwordInputRef.current.value
        const enteredConfirmPassword = confirmPasswordRef.current.value

        if(enteredConfirmPassword !== enteredPassword){
            toast.error("Passwords do not match")
            return; // Add return to stop form submission if passwords don't match
        }

        setIsLoading(true)

        createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword)
        .then((userCredential) => {
            setIsLoading(false)
            toast.success("Registration Successful...");
            navigate("/")

        })
        .catch((error) => {
            setIsLoading(false)
            toast.error(error.message) // Display the error message instead of the full error object
        });
    }

    return (
        <section className={classes.auth}>
            {isLoading && <Loader />}
            <div className={classes.form}>
                <h2>Register</h2>
                <form onSubmit={submitFormHandler}>
                    <input
                        type='email'
                        placeholder='Enter Email'
                        ref={emailInputRef}
                        required
                    />
                    <input
                        type='password'
                        placeholder='Enter Password'
                        ref={passwordInputRef}
                        required
                    />
                    <input
                        type='password'
                        placeholder='Confirm Password'
                        ref={confirmPasswordRef}
                        required
                    />
                    <button className='--btn --btn-primary --btn-block'>Register</button>
                </form>
                <span className={classes.register}>
                    <p>Already have an account?</p>
                    <Link to='/login'>Login</Link>
                </span>
            </div>
            <div className={classes.img}>
                <img src={registerImg} alt='register' width="400" />
            </div>
        </section>
    )
}

export default Register
