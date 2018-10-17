import { combineReducers } from 'redux';
import { 
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE 
} from './actions';

const initialState = {
    token: '',
    error: '',
    isProcessing: false,
    isLoggedIn: false
}

function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST: {
            return { ...state, isLoggedIn: false, isProcessing: true}
        }
        case LOGIN_SUCCESS: {
            return { ...state, isLoggedIn: true, isProcessing: false}
        }
        case LOGIN_FAILURE: {
            return { ...state, error: action.payload, isProcessing: false}
        }
        default:
            return state;
    }
}

function userReducer(state = {}, action) {
    switch(action.type){
        case LOGIN_SUCCESS: {
            return { ...state, ...action.payload}
        }
        default:
            return state;
    }
}

const reducer = combineReducers({
    login: loginReducer,
    user: userReducer,
});

export default reducer;