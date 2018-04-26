// ACTION TYPES
const GET_POSTS = 'GET_POSTS';

// INITIAL STATE
let initialState = {
    posts: []
}

// ACTION CREATORS
export function getPosts(posts) {
    return {
        type: GET_POSTS,
        payload: posts
    }
}

// REDUCERS
function reducer (state = initialState, action) {
    switch(action.type) {
    case GET_POSTS:
        return Object.assign({}, state, {posts: action.payload})
        default:
            return state
    }
}

export default reducer;