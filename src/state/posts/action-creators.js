// Internal Dependencies
import {
    POSTS_GET,
    POST_ADD
} from './action-types';

// Action Creator Definitions
export const postsGet = post => ({
    type: POSTS_GET,
    payload: post
});