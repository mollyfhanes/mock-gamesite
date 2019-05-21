import React, { Component } from 'react'
import PropTypes from 'prop-types'
import YouTubePlayer from 'react-player/lib/players/YouTube'

class Background extends Component {
  constructor() {
    super()
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth
    }
    this.updateSize = this.updateSize.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateSize)
  }

  updateSize() {
    this.setState({ height: window.innerHeight, width: window.innerWidth })
  }

  render() {
    const {
      alt, changeContent, mediaId, type
    } = this.props
    const { height, width } = this.state

    return type === 'image' ? (
      <img src={mediaId} alt={alt} className="background-img" />
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
}

export default Background

Background.propTypes = {
  alt: PropTypes.string,
  changeContent: PropTypes.func,
  mediaId: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['image', 'video']).isRequired
}

Background.defaultProps = {
  alt: 'background',
  changeContent: () => {}
}

/*
<video width="100%" height="auto" autoPlay onEnded={changeContent}>
  Sorry, your browser doesn&apos;t support embedded videos.
  <source src={`${mediaId}.mp4`} type="video/mp4" />
</video>

*/
