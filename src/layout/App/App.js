import React, { Component } from 'react';
import { MenuApp } from '../../components/index';
import Main from './Main';
import { Container } from 'semantic-ui-react';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <MenuApp />
        <Container>
          <Main />
        </Container>
      </div>
    );
  }
}

export default App;
