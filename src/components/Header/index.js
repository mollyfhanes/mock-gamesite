// Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { Element } from 'react-scroll'

// Components
import Nav from '../Nav'

const Header = (props) => {
  const {
    anchor, anchorTitle, classes, hasNav, header, subheader
  } = props
  console.log()

  return (
    <div className="header-container">
      <Element id={anchor} className="section" titlestring={`${anchorTitle}`} />
      <header className={classes}>{header}</header>
      {subheader && <div className="subheader">{subheader}</div>}
      {hasNav && <Nav />}
    </div>
  )
}

export default Header

Header.propTypes = {
  anchor: PropTypes.string,
  anchorTitle: PropTypes.string,
  classes: PropTypes.string,
  hasNav: PropTypes.bool,
  header: PropTypes.string,
  subheader: PropTypes.string
}

Header.defaultProps = {
  anchor: 'default-anchor',
  anchorTitle: null,
  classes: null,
  hasNav: false,
  header: 'Hello World',
  subheader: null
}
