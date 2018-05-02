// Internal Dependencies
import {
    POSTS_GET
} from './action-types';

// Action Creator Definitions
export const postsGet = post => ({
    type: POSTS_GET,
    payload: post
});