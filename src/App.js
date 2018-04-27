// EXTERNAL DEPENDENCIES
import React, { Component } from 'react';
import CssBaseline from 'material-ui/CssBaseline';

// INTERNAL DEPENDENCIES
import Header from './components/Header';
import PostForm from './components/PostForm';
import Posts from './components/Posts';

// LOCAL VARIABLES
const styles = {
  margin: 'auto',
  width: '90%'
}

// COMPONENT DEFINITION
export default class App extends Component {
  render() {
    return (
      <div style={styles}>
      <CssBaseline />
        <Header />
        <PostForm />
        <Posts />
      </div>
    );
  }
}
