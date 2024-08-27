import React from 'react'
import classes from "./header.module.css"
import { NavLink } from 'react-router-dom'
import { logo } from '../../assest' 
import { MdOutlineShoppingCart } from "react-icons/md";
const Header = () => {
  return (
    <>
       <header className={classes.fixed}>
        <div className={classes.header}>
            <img className={classes.logo} src={logo} alt='logo'></img>
        <nav className={classes.links}>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/page">Pages</NavLink></li>
            <li><NavLink to="/shop">Shop</NavLink></li>
            <li><NavLink to="/element">Element</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
          </ul>
          <div className={classes.cart}>
          <MdOutlineShoppingCart size={25}/>
          <span>0</span>
        </div>
        <img className={classes['user-logo']} src='https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='userLogo'/>
        </nav>
        </div>
       </header>
       </>
  )
}

export default Header