import React, { Component } from 'react';
import { Segment, Accordion } from 'semantic-ui-react';
import axios from 'axios';
import { PostCard, PostsDDL } from './index';

class PostManager extends Component {

    constructor() {
        super();
        this.state = { post: {}, posts: [], comments: [] };
        this.addPost = this.addPost.bind(this);
    }
    componentDidMount() {
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
    addPost(id) {
        const postFound = this.state.posts.find(item => item.key === id)
        this.getPostComents(postFound.userId);
        this.setState({ post: postFound })
    }
    render() {
        return (
            <Segment>
                <PostsDDL
                    options={this.state.posts}
                    addPost={this.addPost}
                />
                <PostCard post={this.state.post} />
                <label>Components</label>
                <Accordion panels={this.state.comments} />
            </Segment>
        );
    }
}
export default PostManager;
