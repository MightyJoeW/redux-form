import reducer from './reducer';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const middleware = [thunk];

export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)