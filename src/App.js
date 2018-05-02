// EXTERNAL DEPENDENCIES
import React, { Component } from 'react';
import CssBaseline from 'material-ui/CssBaseline';

// INTERNAL DEPENDENCIES
import AppBar from './components/AppBar';
import PostForm from './components/PostForm';
import Posts from './components/Posts';

// LOCAL VARIABLES
const styles = {
  backgroundColor: '#F2F2F2',
  fontFamily: 'arial',
  margin: 'auto'
}

// COMPONENT DEFINITION
export default class App extends Component {
  render() {
    return (
      <div style={styles}>
        <CssBaseline />
        <AppBar />
        <PostForm />
        <Posts />
      </div>
    );
  }
}
