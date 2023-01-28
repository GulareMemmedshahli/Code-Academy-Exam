import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./index.scss"
const Header = () => {
  return (
    <div className='header'>
      <div>
        <Link to="/">
        <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/logo/loder.jpg" alt="" />
        </Link>
      </div>
      <div className='nav'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/add">Add Services</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/servis">Services</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div className='headericon'>
        <i class="fa-solid fa-bars"></i>
        </div>
    </div>
  )
}

export default Header