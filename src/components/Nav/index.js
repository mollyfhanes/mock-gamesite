import React, { Component } from 'react'
import { Link } from 'react-scroll'

class Nav extends Component {
  constructor() {
    super()
    this.state = {
      anchors: []
    }
  }

  componentDidMount() {
    const anchors = document.querySelectorAll('.section')
    const newAnchors = []

    for (let i = 0; i < anchors.length; i += 1) {
      const anchor = {
        title: anchors[i].getAttribute('titlestring'),
        href: `${anchors[i].getAttribute('id')}`
      }
      newAnchors.push(anchor)
    }

    this.setState({ anchors: newAnchors })
  }

  render() {
    const { anchors } = this.state

    return (
      <nav>
        {anchors.map((anchor) => {
          if (anchor.title !== 'null') {
            return (
              <Link
                activeClass="active"
                className="pointer"
                spy
                smooth
                offset={-70}
                duration={500}
                to={anchor.href}
                key={anchor.title}
              >
                {anchor.title}
              </Link>
            )
          }
          return null
        })}
      </nav>
    )
  }
}

export default Nav
