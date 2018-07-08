import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import logo from '../img/logo.png'
import './all.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Blueprint Projects" />
    <section className="section">
      <div className="title-container">
        <span className="title-projects is-size-3">projects</span>
        <img className="title-image" src={logo} alt="logo" />
        <span className="title-blueprint is-size-3">blueprint</span>
      </div>
    </section>
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
