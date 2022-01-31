import { applyMiddleware, createStore, compose } from "redux";
import reducers from "./Reducers/rootReducers";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./Sagas/rootSagas";

const sagaMiddleware = createSagaMiddleware()
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const middleware = window.__REDUX_DEVTOOLS_EXTENSION__ && process.env.NODE_ENV === "development" ? compose(applyMiddleware(sagaMiddleware), reduxDevTools) : applyMiddleware(sagaMiddleware);

export const store = createStore(reducers, middleware)

sagaMiddleware.run(rootSaga);

export default store;