import React, { useRef } from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaEnvelope, FaTwitter } from 'react-icons/fa6'
import { GoLocation } from 'react-icons/go'
import  classes  from './contact.module.css'
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify'
function ContactUs() {
    const form = useRef("")

    const submitFormHandler = (e) => {
        e.preventDefault();
        
        emailjs
        .sendForm(
            'service_4juab5h', 
            'template_ic35qif',
            form.current, {
                publicKey: 'JRjE3asefzCy1nNvx',
            })
                .then(
                    () => {
                        toast.success('Message sent successfully!');
                    },
                    (error) => {
                        toast.error('FAILED...', error.text);
                    },
                );
            e.target.reset();
            
    }
  return (
    <section >
        <div className={`container ${classes.contact}`}>
            <div>
            <h2>Contact Us</h2>
            <form ref={form} onSubmit={submitFormHandler} className={classes.form} >
                <label id='name'>Name</label>
                <input 
                    name='user_name'
                    type='text'
                    placeholder='full name'
                    required 
                /> 
                <label id='email'>Email</label>
                <input 
                    name='user_email'
                    type='email'
                    placeholder='your active email'
                    required 
                />
                <label id='subject'> subject</label>
                <input 
                    name='subject'
                    type='text'
                    placeholder='subject'
                    required 
                />
                <label id='message'>Message</label>
                <textarea 
                    name="message" 
                    cols="30" 
                    rows="10"
                />   
                <button className="--btn --btn-primary">Send message</button>
            </form>
            </div>
            <div className={classes.details}>
                <h3>Our Contact Information</h3>
                <p>Fill the form or contact us via other channels listed below</p>
                <div className={classes.icons}>
                <span>
                  <FaPhoneAlt />
                  <p>+234 705 141 6545</p>
                </span>
                <span>
                  <FaEnvelope />
                  <p>Support@eshop.com</p>
                </span>
                <span>
                  <GoLocation />
                  <p>Abuja, Nigeria</p>
                </span>
                <span>
                  <FaTwitter />
                  <p>@ZinoTrust</p>
                </span>
              </div>
            </div>
        </div>
    </section>
  )
}

export default ContactUs