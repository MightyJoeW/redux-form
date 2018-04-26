// EXTERNAL DEPENDENCIES
import React, { Component } from 'react';

// INTERNAL DEPENDENCIES
import Header from './components/Header';
import PostForm from './components/PostForm';
import Posts from './components/Posts';

// LOCAL VARIABLES
const styles = {
  margin: '0 auto',
  width: '90%'
}

// COMPONENT DEFINITION
export default class App extends Component {
  render() {
    return (
      <div style={styles}>
        <Header />
        <PostForm />
        <Posts />
      </div>
    );
  }
}
