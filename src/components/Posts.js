// EXTERNAL DEPENDENCIES
import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import axios from 'axios';
import { connect } from 'react-redux';

// INTERNAL DEPENDENCIES
import CircleLoad from './CircleLoad';
import { postsGet } from '../state/reducer';

// LOCAL VARIABLES
const container = {
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '75%'
}

const postStyles = {
  margin: 30
}

const titleStyles = {
  fontWeight: 700
}

// COMPONENT DEFINITION
class Posts extends Component {
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.props.postsGet(res.data)
        console.log(res.data)
      })
  }

  render() {
    const postItems = !this.props.posts.length
      ? <CircleLoad />
      : this.props.posts.map(post =>
        <div style={postStyles} key={post.id}>
          <h3 style={titleStyles}>{post.title}</h3>
          <p>{post.body}</p>
          <Divider />
          <br />
        </div>
      )
    return (
      <div style={container}>
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

export default connect(mapStateToProps  , { postsGet })(Posts);