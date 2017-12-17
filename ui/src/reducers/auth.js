import {
    FETCH_AUTH_REQUEST,
    FETCH_AUTH_SUCCESS,
    FETCH_AUTH_ERROR
} from '../constants/ActionTypes';

const auth = (state = null, action) => {
    switch(action.type){
        case FETCH_AUTH_REQUEST:
            return{
                ...state,
                isFetching: true,
                isUserAuthenticated: false
            }
        case FETCH_AUTH_SUCCESS: 
            return {
                ...state,
                isFetching: false,
                token: action.token,
                isUserAuthenticated: false
            }
        case FETCH_AUTH_ERROR:
            return {
                ...state,
                isFetching: false,
                token: null,
                error: action.error,
                isUserAuthenticated: false
            }
        default:
            return state;
    }
}

export default auth;