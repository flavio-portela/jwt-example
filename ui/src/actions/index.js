import axios from 'axios';
import { 
    FETCH_AUTH_REQUEST,
    FETCH_AUTH_SUCCESS,
    FETCH_AUTH_ERROR 
} from '../constants/ActionTypes';


export const loginUser = ({ email, password }) => {
    return (dispatch, getState) => {
        
        dispatch({ type: FETCH_AUTH_REQUEST });

        axios.post('http://localhost:5000/auth/login', {
            email,
            password
        }).then( response => {
            let { token } = response.data;
            dispatch({
                type: FETCH_AUTH_SUCCESS,
                token
            });
        }).catch( e => {
            dispatch({ 
                type: FETCH_AUTH_ERROR, 
                error: e.response.data.message 
            });
        });
    }
};