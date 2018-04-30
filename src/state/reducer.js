import {
    ENTRY_ADD,
    TITLE_ADD,
    POSTS_GET,
    POST_ADD
} from './action-types';

// INITIAL STATE
let initialState = {
    entry: [],
    posts: [],
    post: '',
    title: ''
}

// ACTION CREATORS
export function entryAdd(entry) {
    return {
        type: ENTRY_ADD,
        payload: entry
    }
}
export function postAdd(post) {
    return {
        type: POST_ADD,
        payload: post
    }
}

export function titleAdd(title) {
    return {
        type: TITLE_ADD,
        payload: title
    }
}

export function postsGet(posts) {
    return {
        type: POSTS_GET,
        payload: posts
    }
}

// REDUCERS
function reducer (state = initialState, action) {
    switch(action.type) {
    case ENTRY_ADD:
        return Object.assign({}, state, [...state.entry, action.payload])
    case POST_ADD:
            return Object.assign({}, state, { posts: action.payload})
    case TITLE_ADD:
        return Object.assign({}, state, { title: action.payload })
    case POSTS_GET:
        return Object.assign({}, state, { posts: action.payload})
        default:
            return state
    }
}

export default reducer;