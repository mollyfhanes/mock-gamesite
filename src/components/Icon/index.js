import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ gameIcon, iconLabel }) => {
  return (
    <div className="icon">
      <span className="icon-label">{iconLabel}</span>
      <img className="game-icon" src={gameIcon} alt={iconLabel} />
    </div>
  )
}

export default Icon

Icon.propTypes = {
  gameIcon: PropTypes.string.isRequired,
  iconLabel: PropTypes.string
}

Icon.defaultProps = {
  iconLabel: 'Game Title'
}
