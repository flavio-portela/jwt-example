import {
    FETCH_AUTH_REQUEST,
    FETCH_AUTH_SUCCESS,
    FETCH_AUTH_ERROR
} from '../constants/ActionTypes';

const initiaState = {
    token: null,
    isUserAuthenticated: false,
    isFetching: false,
    error: null
}

const auth = (state = initiaState, action) => {
    switch(action.type){
        case FETCH_AUTH_REQUEST:
            return{
                ...state,
                isFetching: true,
                isUserAuthenticated: false,
                error: null
            }
        case FETCH_AUTH_SUCCESS: 
            return {
                ...state,
                isFetching: false,
                token: action.token,
                isUserAuthenticated: false,
                error: null
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