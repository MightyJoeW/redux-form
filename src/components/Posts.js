// EXTERNAL DEPENDENCIES
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

// INTERNAL DEPENDENCIES
import { getPosts } from '../state/reducer';
import CircleLoad from './CircleLoad';

const postStyles = {
  margin: 30
}

// LOCAL VARIABLES
const titleStyles = {
  fontWeight: 700,
}

// COMPONENT DEFINITION
class Posts extends Component {
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.props.getPosts(res.data)
        // console.log(res.data)
      })
  }

  render() {
    const postItems = !this.props.posts.length
      ? <CircleLoad />
      : this.props.posts.map(post =>
        <div style={postStyles} key={post.id}>
          <h3 style={titleStyles}>{post.title}</h3>
          <p>{post.body}</p>
          <br />
        </div>
      )
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
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