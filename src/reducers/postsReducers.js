import {
    MODEL_LIST_REQUEST,
    MODEL_LIST_SUCCESS,
    MODEL_LIST_FAIL,

    MODEL_DELETE_REQUEST,
    MODEL_DELETE_SUCCESS,
    MODEL_DELETE_FAIL,

    MODEL_CREATE_REQUEST,
    MODEL_CREATE_SUCCESS,
    MODEL_CREATE_FAIL,
    MODEL_CREATE_RESET,

    MODEL_UPDATE_REQUEST,
    MODEL_UPDATE_SUCCESS,
    MODEL_UPDATE_FAIL,
    MODEL_UPDATE_RESET,
 } from '../constants/actionTypes';


export const postsReducers = ( state = { posts:[] }, action) => {

  switch (action.type) {
      case MODEL_LIST_REQUEST:
          return { posts: []}
      case MODEL_LIST_SUCCESS:
          return { posts: action.payload}
      case MODEL_LIST_FAIL:
          return { error: action.payload}
      default:
          return state
  }
}

export const postsDeleteReducers = ( state = {}, action) => {

    switch (action.type) {
        case MODEL_DELETE_REQUEST:
            return { }
        case MODEL_DELETE_SUCCESS:
            return { success:true}
        case MODEL_DELETE_FAIL:
            return { error: action.payload}
        default:
            return state
    }
  }

  export const postsCreateReducers = ( state = {}, action) => {

    switch (action.type) {
        case MODEL_CREATE_REQUEST:
            return { }
        case MODEL_CREATE_SUCCESS:
            return { success: true, posts: action.payload}
        case MODEL_CREATE_FAIL:
            return { error: action.payload}
        case MODEL_CREATE_RESET:
            return {  }
        default:
            return state
    }
  }

  export const postsUpdateReducers = ( state = {posts:{}}, action) => {

    switch (action.type) {
        case MODEL_UPDATE_REQUEST:
            return { }
        case MODEL_UPDATE_SUCCESS:
            return { success: true, posts: action.payload}
        case MODEL_UPDATE_FAIL:
            return { error: action.payload}
        case MODEL_UPDATE_RESET:
            return { posts:{} }
        default:
            return state
    }
  }
export default postsReducers;