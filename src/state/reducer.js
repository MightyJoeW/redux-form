// ACTION TYPES
const GET_POSTS = 'GET_POSTS';
const ADD_ENTRY = 'ADD_ENTRY';
const ADD_POST = 'ADD_POST';
const ADD_TITLE = 'ADD_TITLE';

// INITIAL STATE
let initialState = {
    entry: [],
    posts: [],
    post: '',
    title: ''
}

// ACTION CREATORS
export function addEntry(entry) {
    return {
        type: ADD_ENTRY,
        payload: entry
    }
}
export function addPost(post) {
    return {
        type: ADD_POST,
        payload: (post)
    }
}

export function addTitle(title) {
    return {
        type: ADD_TITLE,
        payload: title
    }
}

export function getPosts(posts) {
    return {
        type: GET_POSTS,
        payload: posts
    }
}

// REDUCERS
function reducer (state = initialState, action) {
    switch(action.type) {
    case ADD_ENTRY:
        return Object.assign({}, state, [...state.entry, action.payload])
    case ADD_POST:
        return Object.assign({}, state, { post: action.payload })
    case ADD_TITLE:
            return Object.assign({}, state, { title: action.payload })
    case GET_POSTS:
        return Object.assign({}, state, {posts: action.payload})
        default:
            return state
    }
}

export default reducer;