// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES

// LOCAL VARIABLES

// COMPONENT DEFINITION
const PostForm = () => (
    <div>
        <h2>Add Post</h2>
        <form>
            <div>
                <label>Title: </label>
                <input type="text" name="title"/>
            </div>
            <br />
            <div>
                <label> Post: </label>
                <textarea name="body"/>
            </div>
            <br />
            <button type="submit">Submit </button>
            <hr />
        </form>
    </div>
)

export default PostForm;