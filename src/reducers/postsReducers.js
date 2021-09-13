import { MODEL_LIST_REQUEST, MODEL_LIST_SUCCESS,  MODEL_LIST_FAIL } from '../constants/actionTypes';


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
export default postsReducers;