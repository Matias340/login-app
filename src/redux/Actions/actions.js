import actionTypes from './action.types';

//ADD USERS
export const createUsersRequested = (users) => {
    return {
        type: actionTypes.CREATE_USERS_REQUESTED,
        payload: users
    };
};

export const createUsersSuccess = () => {
    return {
        type: actionTypes.CREATE_USERS_SUCCESS,
    };
};
export const createUsersFailed = (error) => {
    return {
        type: actionTypes.CREATE_USERS_FAILED,
        payload: error
    };
};


export const signinUsersRequested = (formValue) => {
    return {
        type: actionTypes.SIGNIN_USERS_REQUESTED,
        payload: formValue
    };
};
export const signinUsersSuccess = (users) => {
    return {
        type: actionTypes.SIGNIN_USERS_SUCCESS,
        payload: users
    };
};
export const signinUsersFailed = (error) => {
    return {
        type: actionTypes.SIGNIN_USERS_FAILED,
        payload: error
    };
};
