import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getPosts } from '../state/reducer';

class Posts extends Component {
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      this.props.getPosts(res.data)
      console.log(res.data)
    })
  }

  render() {
    const postItems = !this.props.posts.length
    ? 'Loading...'
    : this.props.posts.map(post =>
      <div key={post.id}>
        <h3>{post.title}</h3>
      </div>
      )
    return (
      <div>
        <h1>Posts</h1>
        { postItems }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { posts } = state;
  return {
    posts
  }
}

export default connect(mapStateToProps, { getPosts })(Posts);