import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class MenuApp extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu color='teal'>
        <Menu.Item as={Link} to='/'
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          HOME
        </Menu.Item>

        <Menu.Item name='reviews' as={Link} to='/userform' active={activeItem === 'reviews'} onClick={this.handleItemClick}>
          ABOUT ME
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