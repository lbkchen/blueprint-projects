import React from 'react'
import Link from 'gatsby-link'

import logo from '../img/logo.png'

const Navbar = () => (
  <nav className="nav-container">
    <Link to="/">
      <div className="title-container">
        <span className="title-projects is-size-3">projects</span>
        <img className="title-image" src={logo} alt="logo" />
        <span className="title-blueprint is-size-3">blueprint</span>
      </div>
    </Link>
  </nav>
)

export default Navbar
