import actionTypes from '../Actions/action.types';

const initialState = {
    users: [],
    loading: false,
    error: null
}

const users = (state = initialState, action ) => {
    switch(action.type) {
        case actionTypes.SIGNIN_USERS_REQUESTED:
        case actionTypes.CREATE_USERS_REQUESTED:            
            return {
                ...state,
                loading: true,
            }
        case actionTypes.SIGNIN_USERS_SUCCESS:
            return {
                ...state,
                loading: false, 
                userLogged: action.userLogged
            }    
        case actionTypes.CREATE_USERS_SUCCESS:
            console.log(action);   
            return {
                ...state,
                loading: false,
            }    
        case actionTypes.SIGNIN_USERS_FAILED:         
        case actionTypes.CREATE_USERS_FAILED:       
            return {
                ...state,
                loading: false, error: action.message
            }
        default:
            return state;    
        }    
};

export default users;