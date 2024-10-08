import React, { useRef, useState } from 'react'
import { restImg } from '../../assest'
import classes from "./auth.module.css"
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from 'react-toastify';
import Loader from '../../component/loader/Loader';

function Rest() {
    const emailInputRef =useRef("")
    const [isLoading , setIsLoading] = useState(false)
    const navigate = useNavigate()
    const auth = getAuth();

    const submitFormHandler = (e) => {
        e.preventDefault();
        const enteredEmail = emailInputRef.current.value
   
        sendPasswordResetEmail(auth, enteredEmail)
        .then(() => {
            setIsLoading(false);
            toast.success("Check your email for a reset link");
            navigate("/login")
          })
          .catch((error) => {
            setIsLoading(false);
            toast.error(error.message);
          });
    }
  return (
    <section className={classes.auth}>
        {isLoading && <Loader/>}
        <div className={classes.img}>
        <img src={restImg} alt='rest' width='400'/>
        </div>
            <div className={classes.form}>
                <h2>Rest Password</h2>
                <form onSubmit={submitFormHandler}>
                    <input 
                    type='email'
                    placeholder='Email'
                    ref={emailInputRef}
                    required
                    />
                    <button className='--btn --btn-primary --btn-block'>Rest</button>
                </form>
                <div className={classes.links}>
                <p><Link to="/login" >-Login</Link></p>
                <p><Link to="/register" >-Register</Link></p>
                </div>
        </div>
    </section>
  )
}

export default Rest