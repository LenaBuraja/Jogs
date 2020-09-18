import { routerMiddleware, connectRouter } from "connected-react-router";
import { applyMiddleware, combineReducers, createStore, compose, AnyAction } from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";

import history from "../route/history";
import { reducers } from "../reducers";
/*
const store = createStore(
  combineReducers({ ...reducers, router: connectRouter(history) }),
  {},
  compose(
    applyMiddleware(thunk),
    applyMiddleware(routerMiddleware(history)),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f: unknown) => f,
  ),
);

export type AppState = ReturnType<typeof store["getState"]>;
export type AppDispatch = ThunkDispatch<AppState, undefined, AnyAction>;
export type AppGetState = () => AppState;*/

const store = createStore(
  combineReducers({ ...reducers, router: connectRouter(history) }),
  {},
  compose(
    applyMiddleware(thunk),
    applyMiddleware(routerMiddleware(history)),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f: unknown) => f,
  ),
);

export type AppState = ReturnType<typeof store["getState"]>;
export type AppDispatch = ThunkDispatch<AppState, undefined, AnyAction>;
export type AppGetState = () => AppState;

export default store;
