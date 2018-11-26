import React, { Component } from 'react';
import { Dropdown, Segment, Accordion } from 'semantic-ui-react';
// import { Card, Icon } from 'semantic-ui-react';
import axios from 'axios';
import { PostCard } from './index';

// const columnsConfig = [
//     { 'field': 'id', 'label': '', 'template': () => <Icon name='user' /> },
//     {
//         'field': 'body', 'label': '', 'template': ({ email, body }) => <Card>
//             <Card.Content header={email} />
//             <Card.Content description={[body]} />
//         </Card>
//     }
// ];

class PostManager extends Component {

    constructor() {
        super();
        this.state = { post: {}, posts: [], comments: [] };
        this.getPosts();
    }
    // countryOptions = [ { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' }, ...  ]
    getPosts() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                const pos = res.data.map(({ userId, id, title, body }) => ({
                    userId, key: id, value: id, text: title, body
                }));
                this.setState({ posts: pos });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    getPostComents(id) {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(res => {
                const com = res.data.map(({ postId, id, name, email, body }) => ({
                    postId, id, name, title: email, content: body
                }));
                this.setState({ comments: com });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    render() {
        return (
            <Segment>
                <Dropdown
                    scrolling
                    placeholder='Select one post'
                    fluid
                    search
                    selection
                    options={this.state.posts}
                    onChange={({ ...e }, { value }) => {
                        this.setState({ post: this.state.posts.find(item => item.key === value) })
                        this.getPostComents(value);
                    }}
                />
                <PostCard post={this.state.post} />
                <label>Components</label>
                <Accordion panels={this.state.comments} />
                {/* {console.log('Selected post: ', this.state.post)}
                {console.log('Post comments: ', this.state.comments)} */}
            </Segment>
        );
    }
}
export default PostManager;
