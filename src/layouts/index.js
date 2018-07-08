import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import logo from '../img/logo.png'
import './all.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Blueprint Projects" />
    <nav className="nav-container">
      <Link to="/">
        <div className="title-container">
          <span className="title-projects is-size-3">projects</span>
          <img className="title-image" src={logo} alt="logo" />
          <span className="title-blueprint is-size-3">blueprint</span>
        </div>
      </Link>
    </nav>
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
