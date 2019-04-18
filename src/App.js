import React, { Component } from 'react';
import PostForm from './PostForm'
import AllPost from './AllPost'
import { Card, Divider } from 'semantic-ui-react';
class App extends Component {
  render() {
    return (
      <div className="App">
        <PostForm />
        <Divider />
        <Card.Group centered itemsPerRow={3}>
          <AllPost />
        </Card.Group>
      </div>
    );
  }
}

export default App;
