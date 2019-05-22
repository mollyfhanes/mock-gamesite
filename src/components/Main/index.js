// Libraries
import React, { Component } from 'react'

// Components
import Carousel from '../Carousel'

// Content
import { content } from '../../data'

class Main extends Component {
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
    const { height, width } = this.state

    return (
      <div className="main">
        {content.map((section, i) => {
          const {
            anchor, anchorTitle, data, header, subheader
          } = section

          return (
            <Carousel
              anchor={anchor}
              anchorTitle={anchorTitle}
              data={data}
              hasNav={i === 0}
              header={header}
              key={anchor}
              large={i === 0}
              subheader={subheader}
              height={height}
              width={width}
            />
          )
        })}
      </div>
    )
  }
}

export default Main
