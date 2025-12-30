import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <NavLink to='/' className='nav-link'>
        <i class="fa-regular fa-house"></i>
        Home
      </NavLink>
      <NavLink to='/pastes' className='nav-link'>
        <i class="fa-regular fa-paste"></i>
        Pastes
      </NavLink>
    </div>
  )
}

export default Navbar
