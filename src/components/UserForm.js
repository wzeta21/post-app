import React, { Component } from 'react'
import { Form, Segment } from 'semantic-ui-react'


class UserForm extends Component {

    constructor(userId) {
        super(userId);
        this.state = { user: {} };
    }

    render() {
        const { value } = this.state.user
        return (
            <Segment>
                <Form>
                    <label>NOmbre completo</label>
                    <Form.Group widths='equal'>
                        <Form.Field>
                            <label>Username</label>
                            <input fluid value='Wilder Zapata miranda' placeholder='Username' />
                        </Form.Field>
                        <Form.Field>
                            <label>Email</label>
                            <input fluid value='wzeta21@gmail.com' placeholder='Email' />
                        </Form.Field>
                    </Form.Group>
                    <Form.Group fluid widths='equal'>
                        <Form.Field>
                            <label>Phone</label>
                            <input fluid value='+591-72271776' placeholder='Phone' />
                        </Form.Field>
                        <Form.Field>
                            <label>Website</label>
                            <input fluid value='https://www.zeta21.org.bo' placeholder='Website' />
                        </Form.Field>
                    </Form.Group>
                    <Form.Group fluid widths='equal'>
                        <Form.Field>
                            <label>Company</label>
                            <input fluid value='Avantica Co.' placeholder='Company' />
                        </Form.Field>
                    </Form.Group>
                </Form>
            </Segment>
        )
    }
}

export default UserForm
