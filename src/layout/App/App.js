import React, { Component } from 'react';
import MenuApp from './MenuApp';
// import { PostManager, UserForm } from '../../components/index';
// import { PostsDDL } from '../../components';
import Main from './Main';
import { Container } from 'semantic-ui-react';

// import axios from 'axios';

// const templateFuncion = (a) => a;

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
    // this.addPost = this.addPost.bind(this);
    // this.getPosts();
  }

  // getPosts() {
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //     .then(res => {
  //       const pos = res.data.map(({ userId, id, title, body }) => ({
  //         userId, key: id, value: id, text: title, body
  //       }));
  //       this.setState({ posts: pos });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
  // addPost(post) {
  //   this.setState({ post });
  //   console.log(this.state.post);
  // }
  render() {
    return (
      <div className="App">
        <MenuApp />
        <Container>
          <Main />
        </Container>
        {/* <PostManager />
        <UserForm /> */}
        {/* <PostsDDL options={this.state.posts} */}
        {/* <DataTable columns={columnsConfig} rows={this.state.posts} /> */}
      </div>
    );
  }
}

export default App;
