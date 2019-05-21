// Libraries
import React from 'react'

// Components
import Carousel from '../Carousel'

// Dummy Data
import { data1, data2, data3 } from '../../data'

// Content
const content = [
  {
    anchor: 'top',
    data: data1,
    header: 'Play great PC games and connect with your friends, all in one place'
  },
  {
    anchor: 'greatpcgames',
    anchorTitle: 'Great PC games',
    data: data2,
    header: 'Great PC games',
    subheader:
      "Epic RPGs, action-packed shooters, simulation hits - no matter your tastes, Origin's got you covered."
  },
  {
    anchor: 'downloadnow',
    anchorTitle: 'Download now',
    data: data3,
    header: 'What are you waiting for?',
    subheader: `Download the Origin client, grab a soda (or tea, if that's your thing), and dig into that game you've
        been obsessing over. Sounds like a perfect day to us.`
  }
]

const Main = () => {
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
          />
        )
      })}
    </div>
  )
}

export default Main
