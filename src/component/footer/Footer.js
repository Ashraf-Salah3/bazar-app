import React from 'react'
import { paymentLogo, logo } from '../../assest'
import classes from './footer.module.css'
import { FaGithub, FaYoutube, FaFacebook,FaTwitter,FaInstagram , FaLocationDot} from "react-icons/fa6";
import { MdAccountBox } from 'react-icons/md'; 
import { SiPaypal } from 'react-icons/si'; 
import { FaHome } from 'react-icons/fa'; 




function Footer() {
  return (
    <div className={classes.footer}>
        <div className={classes.content}>
            <div className={classes.payment}>
                <img src={logo} alt='logo' style={{width: "7rem"}}/>
                <p>© ReactDB.com</p>
                <img src={paymentLogo} alt='payment' style={{width: "8rem"}}></img>
                < div className={classes.icon}>
                  <FaGithub/>
                  <FaYoutube />
                  <FaFacebook />
                  <FaTwitter />
                  <FaInstagram />
                </div>
                <p className={classes["copy-rigth"]}>@ Ashrah salah</p>
            </div>

            <div className={classes.contact}>
              <h3>Locate Us</h3>
              <div>
                <p>MBD,Ruwi, Muscat-Oman</p>
                <p>Mobile: 00968 97859628</p>
                <p>Phone: 00968 97867975</p>
                <p>e-mail: bazar@gmail.com</p>
              </div>
            </div>

            <div className={classes.profile}>
              <h3>Profile</h3>
              <div>
                <p><span><MdAccountBox /></span>  my accout</p>
                <p><span><SiPaypal/></span>   checkout</p>
                <p><span><FaHome /></span>   order tracking</p>
                <p><span><FaLocationDot /></span>  help & support</p>
              </div>
              </div>  
              <div className={classes.input}>
                <input type='text' placeholder='e-mail'/>
                <button>Subscribe</button>
              </div>
        </div>
    </div>
  )
}

export default Footer