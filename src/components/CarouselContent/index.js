// Libraries
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Background from '../Background'
import Header from '../Header'
import Icon from '../Icon'

const CarouselContent = (props) => {
  const {
    anchor, anchorTitle, data, hasNav, header, subheader, large
  } = props

  // Child Props
  const backgroundProps = {
    alt: data.iconLabel,
    key: data.mediaId,
    mediaId: data.mediaId,
    type: data.type,
    ...props
  }

  const iconProps = {
    gameIcon: data.gameIcon,
    iconLabel: data.iconLabel
  }

  const headerProps = {
    anchor,
    anchorTitle,
    classes: large ? 'large' : null,
    hasNav,
    header,
    subheader
  }

  return (
    <div className="carousel-content">
      {data.gameIcon && <Icon {...iconProps} />}
      <Background {...backgroundProps} />
      <Header {...headerProps} />
    </div>
  )
}

export default CarouselContent

CarouselContent.propTypes = {
  anchor: PropTypes.string,
  anchorTitle: PropTypes.string,
  data: PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.oneOf(['image', 'video']),
    mediaId: PropTypes.string,
    gameIcon: PropTypes.string,
    iconLabel: PropTypes.string
  }).isRequired,
  hasNav: PropTypes.bool,
  header: PropTypes.string,
  large: PropTypes.bool,
  subheader: PropTypes.string
}

CarouselContent.defaultProps = {
  anchor: '#default-anchor',
  anchorTitle: null,
  hasNav: false,
  header: 'Default Header',
  large: false,
  subheader: null
}
