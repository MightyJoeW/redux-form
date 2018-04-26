import React, { Component } from 'react';

import PostForm from './components/PostForm';
import Posts from './components/Posts';

export default class App extends Component {
  render() {
    return (
      <div>
        <PostForm />
        <Posts />
      </div>
    );
  }
}
