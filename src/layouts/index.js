import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import Navbar from '../components/Navbar'
import logo from '../img/logo.png'
import './all.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Blueprint Projects" />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
