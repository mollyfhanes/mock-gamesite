import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CarouselContent from '../CarouselContent'

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0
    }
    this.changeContent = this.changeContent.bind(this)
    this.setImageTimeout = this.setImageTimeout.bind(this)
  }

  componentDidMount() {
    this.setImageTimeout()
  }

  componentDidUpdate() {
    this.setImageTimeout()
  }

  setImageTimeout() {
    const { index } = this.state
    const { data } = this.props

    if (data[index].type === 'image') {
      setTimeout(() => this.changeContent(), 10000)
    }
  }

  changeContent() {
    const { data } = this.props

    this.setState((prevState) => {
      return {
        index: (prevState.index + 1) % data.length
      }
    })
  }

  render() {
    const { data } = this.props
    const { index } = this.state

    return <CarouselContent {...this.props} data={data[index]} changeContent={this.changeContent} />
  }
}

export default Carousel

Carousel.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      type: PropTypes.oneOf(['image', 'video']),
      mediaId: PropTypes.string,
      gameIcon: PropTypes.string,
      iconLabel: PropTypes.string
    })
  ).isRequired
}
