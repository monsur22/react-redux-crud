import axios from 'axios';
import { MODEL_LIST_REQUEST, MODEL_LIST_SUCCESS,  MODEL_LIST_FAIL } from '../constants/actionTypes';

export const listPosts = () => async (dispatch) => {
    try {
        dispatch({ type: MODEL_LIST_REQUEST})
        const {data} =   await axios.get('http://localhost:8000/api/model')
        dispatch({ type: MODEL_LIST_SUCCESS, payload: data})
        // console.log(data)
    } catch (error) {
        dispatch({ type: MODEL_LIST_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message})

    }
}