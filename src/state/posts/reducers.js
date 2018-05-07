// External Dependencies
import createReducer from '../createReducer';
import { combineReducers } from 'redux';

// Internal Dependencies
import {
    POSTS_GET
} from '../action-types';


// Reducer Definitions
export const postsGet = createReducer({}, {
    [POSTS_GET]: (state, action) => action.payload,
});

export default combineReducers({
    postsGet
})