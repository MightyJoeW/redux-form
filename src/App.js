// EXTERNAL DEPENDENCIES
import React, { Component } from 'react';
import CssBaseline from 'material-ui/CssBaseline';
import Card, { CardActions, CardContent } from 'material-ui/Card';

// INTERNAL DEPENDENCIES
import AppBar from './components/AppBar';
import PostForm from './components/PostForm';
import Posts from './components/Posts';

// LOCAL VARIABLES
const styles = {
  color: '#4f4f4f',
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
        <Card style={{width: '75%', margin: '50px auto'}}>
          <Posts />
        </Card>
      </div>
    );
  }
}
