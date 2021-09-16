import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk  from 'redux-thunk'
import {composeWithDevTools}  from 'redux-devtools-extension'
import { postsReducers, postsDeleteReducers, postsCreateReducers } from './reducers/postsReducers';

const reducer = combineReducers({
        postList: postsReducers,
        postDelete: postsDeleteReducers,
        postCreate: postsCreateReducers,
})
const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store;