import React, { Component } from 'react'
import { Form, Segment, Label } from 'semantic-ui-react'
import axios from 'axios';


class UserForm extends Component {

    constructor(userId) {
        super(userId);
        this.state = { user: {}, companyname: '' };
        this.getUser(1);
    }
    getUser(userId) {
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(res => {
                this.setState({ user: res.data });
                this.setState({ companyname: res.data.company.name });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    render() {
        const { name, username, email, phone, website } = this.state.user;
        return (
            <Segment>
                <Form>
                    <Label color='teal'>
                        {name}
                    </Label>
                    <Form.Group widths='equal'>
                        <Form.Field>
                            <label>Username</label>
                            <input fluid value={username} placeholder='Username' />
                        </Form.Field>
                        <Form.Field>
                            <label>Email</label>
                            <input fluid value={email} placeholder='Email' />
                        </Form.Field>
                    </Form.Group>
                    <Form.Group fluid widths='equal'>
                        <Form.Field>
                            <label>Phone</label>
                            <input fluid value={phone} placeholder='Phone' />
                        </Form.Field>
                        <Form.Field>
                            <label>Website</label>
                            <input fluid value={website} placeholder='Website' />
                        </Form.Field>
                    </Form.Group>
                    <Form.Group fluid widths='equal'>
                        <Form.Field>
                            <label>Company</label>
                            <input fluid value={this.state.companyname} placeholder='Company' />
                        </Form.Field>
                    </Form.Group>
                </Form>
            </Segment>
        )
    }
}

export default UserForm
