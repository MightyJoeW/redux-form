// EXTERNAL DEPENDENCIES
import React, { Component } from 'react';
import { connect } from 'react-redux';

// INTERNAL DEPENDENCIES
import { addEntry, addPost, addTitle } from '../state/reducer';

// LOCAL VARIABLES

// COMPONENT DEFINITION
class PostForm extends Component {
    render() {
        const { addEntry, addPost, addTitle } = this.props;
        return (
            <div>
                <h2>Add Post</h2>
                <form>
                    <div>
                        <label>Title: </label>
                        <input type="text" name="title" onChange={(e) => addTitle(e.target.value)} />
                    </div>
                    <br />
                    <div>
                        <label> Post: </label>
                        <textarea name="body" onChange={(e) => addPost(e.target.value)}/>
                    </div>
                    <br />
                    <button type="submit" onClick={() => addEntry()}>Submit </button>
                    <hr />
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { entry, post, title } = state;
    return { entry, post, title }
}

export default connect(mapStateToProps, { addEntry, addPost, addTitle })(PostForm);