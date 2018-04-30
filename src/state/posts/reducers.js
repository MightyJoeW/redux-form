// External Dependencies
import { combineReducers } from 'redux';
import createReducer from '../createReducer';

// Internal Dependencies
import {
    POST_ADD
} from '../action-types';


// Reducer Definitions
export const postAdd = createReducer({}, {
    [POST_ADD]: (state, action) => action.payload,
});