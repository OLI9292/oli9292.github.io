import React from 'react'

import { Link } from 'gatsby'
import './layout.css'

import StickyCTA from './sticky-cta'

const linkStyle = {
  color: 'black',
  textDecoration: 'none',
}

const Header = () => (
  <div className="links">
    <p className="link">
      <Link to="/" style={Object.assign({ marginRight: '25px' }, linkStyle)}>
        home
      </Link>
    </p>
    <p className="link">
      <Link
        to="/gallery"
        style={Object.assign({ marginRight: '25px' }, linkStyle)}
      >
        gallery
      </Link>
    </p>
    <p className="link">
      <Link to="/contact" style={linkStyle}>
        contact
      </Link>
    </p>

    <StickyCTA />
  </div>
)

export default Header
