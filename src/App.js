// EXTERNAL DEPENDENCIES
import React, { Component } from 'react';
import CssBaseline from 'material-ui/CssBaseline';
import Card from 'material-ui/Card';

// INTERNAL DEPENDENCIES
import AppBar from './components/AppBar';
import Footer from './components/Footer';
import PostForm from './components/PostForm';
import Posts from './components/Posts';

// LOCAL VARIABLES
const styles = {
  color: '#4f4f4f',
  fontFamily: 'ariel',
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
        <Card style={{ width: '75%', margin: '50px auto 0 auto' }}>
          <Posts />
        </Card>
        <Footer />
      </div>
    );
  }
}
