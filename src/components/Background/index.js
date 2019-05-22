import React from 'react'
import PropTypes from 'prop-types'
import YouTubePlayer from 'react-player/lib/players/YouTube'

const Background = (props) => {
  const {
    data, changeContent, height, width
  } = props
  const { iconLabel, mediaId, type } = data

  return type === 'image' ? (
    <img src={mediaId} alt={iconLabel} className="background-img" />
  ) : (
    <YouTubePlayer
      url={`https://www.youtube.com/embed/${mediaId}`}
      className="youtube"
      playing
      controls={false}
      volume={0}
      height={height}
      width={width}
      onEnded={changeContent}
    />
  )
}

export default Background

Background.propTypes = {
  data: PropTypes.shape({
    iconLabel: PropTypes.string,
    mediaId: PropTypes.string,
    type: PropTypes.oneOf(['image', 'video'])
  }).isRequired,
  changeContent: PropTypes.func,
  height: PropTypes.number,
  width: PropTypes.number
}

Background.defaultProps = {
  changeContent: () => {},
  height: window.innerHeight,
  width: window.innerWidth
}
