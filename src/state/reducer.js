import {
    POSTS_GET,
    POST_ADD
} from './action-types';

// INITIAL STATE
let initialState = {
    posts: [],
    post: ''
}

// ACTION CREATORS
export function postsGet(posts) {
    return {
        type: POSTS_GET,
        payload: posts
    }
}

export function postAdd(post) {
    return {
        type: POST_ADD,
        payload: post
    }
}

// REDUCERS
function reducer (state = initialState, action) {
    switch(action.type) {
    case POSTS_GET:
        return Object.assign({}, state, { posts: action.payload})
    case POST_ADD:
        return Object.assign({}, state, { post: action.payload})
        default:
            return state
    }
}

export default reducer;