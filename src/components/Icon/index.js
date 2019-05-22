import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ data }) => {
  const { gameIcon, iconLabel } = data

  return (
    <div className="icon">
      <span className="icon-label">{iconLabel}</span>
      <img className="game-icon" src={gameIcon} alt={iconLabel} />
    </div>
  )
}

export default Icon

Icon.propTypes = {
  data: PropTypes.shape({
    gameIcon: PropTypes.string,
    iconLabel: PropTypes.string
  }).isRequired
}
