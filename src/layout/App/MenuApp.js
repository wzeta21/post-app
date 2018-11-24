import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuApp extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu color='teal'>
        <Menu.Item
          
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          HOME
        </Menu.Item>

        <Menu.Item name='reviews' active={activeItem === 'reviews'} onClick={this.handleItemClick}>
          ABOUT AS
        </Menu.Item>

        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          onClick={this.handleItemClick}
        >
          CONTACT AS
        </Menu.Item>
      </Menu>
    )
  }
}