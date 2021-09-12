import { INCREMENT, DECREMENT } from '../constants/actionTypes';


    export const increaseCounter = () => {

        return {

            type: INCREMENT,

        };

    };

    export const decreaseCounter = () => {

        return {

           type: DECREMENT,

        };

    };