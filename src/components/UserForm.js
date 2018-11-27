import React, { Component } from 'react'
import { Form, Segment, Label } from 'semantic-ui-react'
import axios from 'axios';


class UserForm extends Component {

    constructor(userId) {
        super(userId);
        this.state = { user: {}, companyname: '' };

    }
    componentDidMount() {
        this.getUser(this.props.match.params.id);
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
                            <input fluid={'true'} value={username} placeholder='Username' type='text' onChange={() => { }} />
                        </Form.Field>
                        <Form.Field>
                            <label>Email</label>
                            <input fluid={'true'} value={email} placeholder='Email' readOnly type='text' onChange={() => { }} />
                        </Form.Field>
                    </Form.Group>
                    <Form.Group fluid={'true'} widths='equal'>
                        <Form.Field>
                            <label>Phone</label>
                            <input fluid={'true'} value={phone} placeholder='Phone' readOnly type='text' onChange={() => { }} />
                        </Form.Field>
                        <Form.Field>
                            <label>Website</label>
                            <input fluid={'true'} value={website} placeholder='Website' readOnly type='text' onChange={() => { }} />
                        </Form.Field>
                    </Form.Group>
                    <Form.Group fluid={'true'} widths='equal'>
                        <Form.Field>
                            <label>Company</label>
                            <input fluid={'true'} value={this.state.companyname} placeholder='Company' readOnly type='text' onChange={() => { }} />
                        </Form.Field>
                    </Form.Group>
                </Form>
            </Segment>
        )
    }
}

export default UserForm
