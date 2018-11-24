import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import { Users, AddUser } from '../../components/index';

class UserManager extends Component {

  constructor() {
    super();
    this.state = { userToAdd: '', users: [] };
    this.updateUser = this.updateUser.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  updateUser(userToAdd) {
    this.setState({ userToAdd });
  }
  addUser() {
    const { userToAdd: name, users } = this.state;
    const key = Math.random(Math.random() * 1000);
    this.setState({ users: [...users, { key, name }], userToAdd: '' });
  }

  render() {
    const { users, userToAdd } = this.state;
    return (
      <Segment>
        <AddUser
          user={userToAdd}
          updateUser={this.updateUser}
          addUser={this.addUser}
        />
        <Users users={users} />
      </Segment>
    );
  }
}

export default UserManager;
