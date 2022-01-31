import { all, call, put, takeEvery } from "redux-saga/effects";
import actionTypes from "../Actions/action.types";
import { axiosCreateUsers, axiosGetUsers, axiosSignIn } from "../Sagas/axiosRequest";

export function* handleGetUsers() {
    try {
        const users = yield call(axiosGetUsers)
        console.log(users);
        yield put({ type: actionTypes.SIGNIN_USERS_SUCCESS, users: users})
    }catch(err) {
        yield put({ type: actionTypes.SIGNIN_USERS_FAILED, message: err.message})
    }
}

export function* handleCreateUsers(state) {
    const {payload} = state;
    try {
        const users = yield call(axiosCreateUsers, payload)
        yield put({ type: actionTypes.CREATE_USERS_SUCCESS, users: users})
    }catch(err) {
        yield put({ type: actionTypes.CREATE_USERS_FAILED, message: err.message})
    }
}

export function* handleSignIn(state) {
    try {
        const {payload} = state;
        const user = yield call(axiosSignIn, payload)
        yield put({ type: actionTypes.SIGNIN_USERS_SUCCESS, userLogged: user})
    }catch(err) {
        yield put({ type: actionTypes.SIGNIN_USERS_FAILED, message: err.message})
    }
}

//los watcher
export function* watcherCreateUserSaga() {
    yield takeEvery(actionTypes.CREATE_USERS_REQUESTED, handleCreateUsers);
}

export function* watcherUserSaga() {
    yield takeEvery(actionTypes.SIGNIN_USERS_REQUESTED, handleSignIn);
}




export default function* rootSaga() {
    yield all([
        watcherUserSaga(), 
        watcherCreateUserSaga(),
    ])
}