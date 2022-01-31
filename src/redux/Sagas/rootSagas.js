import { all } from "redux-saga/effects";
import fetchUsersSaga from "./fetchRequest";

export default function* rootSaga() {
    yield all([fetchUsersSaga()]);
}
