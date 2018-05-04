import {
    FORM_SUBMIT,
    POSTS_GET,
    POST_COMMENT_UPDATE,
    POST_TITLE_UPDATE
} from './action-types';

// INITIAL STATE
let initialState = {
    posts: [],
    postComment: '',
    postTitle: ''
}

// ACTION CREATORS
export const formSubmit = () => ({
    type: FORM_SUBMIT
})

export const postsGet = posts => ({
        type: POSTS_GET,
        payload: posts
})

export const postCommentUpdate = postComment => ({
    type: POST_COMMENT_UPDATE,
    payload: postComment
})

export const postTitleUpdate = postTitle => ({
    type: POST_TITLE_UPDATE,
    payload: postTitle
})

// REDUCERS
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FORM_SUBMIT:
            return Object.assign({}, state, {
                postTitle: `New title: ${state.postTitle}`,
                postComment: `New comment: ${state.postComment}`
            })
        case POSTS_GET:
            return Object.assign({}, state, { posts: action.payload})
        case POST_TITLE_UPDATE:
            return Object.assign({}, state, { postTitle: action.payload})
        case POST_COMMENT_UPDATE:
            return Object.assign({}, state, {postComment: action.payload})
        default:
            return state
    }
}

export default reducer;