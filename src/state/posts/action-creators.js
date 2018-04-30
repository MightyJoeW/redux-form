// Internal Dependencies
import {
    ENTRY_ADD,
    TITLE_ADD,
    POSTS_GET,
    POST_ADD
} from './action-types';

// Action Creator Definitions
export const postAdd = (post) => ({
    type: POST_ADD,
    payload: post
});