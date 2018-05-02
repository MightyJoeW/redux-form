// Internal Dependencies
import { postsGet } from './action-creators';

// Action Definitions
export const getPosts = post =>
    dispatch =>
        dispatch(postsGet(post));