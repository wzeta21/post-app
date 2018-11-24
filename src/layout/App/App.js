import React, { Component } from 'react';
import {UserForm} from '../../components/index';
import MenuApp from './MenuApp';
import PostManager from './PostManager';
import axios from 'axios';

const templateFuncion = (a) => a;

// const columnsConfig = [
//   { 'field': 'userId', 'label': 'userId', 'template': templateFuncion },
//   { 'field': 'id', 'label': 'id', 'template': templateFuncion },
//   { 'field': 'title', 'label': 'title', 'template': templateFuncion },
//   { 'field': 'body', 'label': 'body', 'template': templateFuncion },
// ];


class App extends Component {

  constructor() {
    super();
    this.state = { posts: [], post: '' };
    this.addPost = this.addPost.bind(this);
    this.getPosts();

  }

  getPosts() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.setState({ posts: res.data });
        // console.log(JSON.stringify(this.state.posts));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  addPost(post) {
    this.setState({ post });
    console.log(this.state.post);
  }
  render() {
    return (
      <div className="App">
        <MenuApp />
        <PostManager />
        <UserForm />
        {/* <DataTable columns={columnsConfig} rows={this.state.posts} /> */}
      </div>
    );
  }
}

export default App;
