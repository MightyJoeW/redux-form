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
  height: '100vh',
  fontFamily: 'ariel',
  margin: 'auto'
}

const cardStyles = {
  margin: '40px auto 0 auto',
  width: '75%'
}

// COMPONENT DEFINITION
export default class App extends Component {
  render() {
    return (
      <div style={styles}>
        <CssBaseline />
        <AppBar />
        <PostForm />
        <Card style={cardStyles}>
          <Posts />
        </Card>
        <Footer />
      </div>
    );
  }
}
