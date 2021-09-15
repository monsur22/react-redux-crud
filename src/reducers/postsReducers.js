import { MODEL_LIST_REQUEST, MODEL_LIST_SUCCESS,  MODEL_LIST_FAIL, MODEL_DELETE_REQUEST, MODEL_DELETE_SUCCESS, MODEL_DELETE_FAIL } from '../constants/actionTypes';


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
export default postsReducers;