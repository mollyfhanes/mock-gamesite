// Libraries
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Background from '../Background'
import Header from '../Header'
import Icon from '../Icon'

const CarouselContent = (props) => {
  const { data, large } = props
  const { mediaId, gameIcon } = data

  return (
    <div className="carousel-content">
      {gameIcon && <Icon {...props} />}
      <Background {...props} key={mediaId} />
      <Header {...props} classes={large ? 'large' : null} />
    </div>
  )
}

export default CarouselContent

CarouselContent.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.oneOf(['image', 'video']),
    mediaId: PropTypes.string,
    gameIcon: PropTypes.string,
    iconLabel: PropTypes.string
  }).isRequired,
  large: PropTypes.bool
}

CarouselContent.defaultProps = {
  large: false
}
