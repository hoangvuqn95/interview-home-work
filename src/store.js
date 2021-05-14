import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import { onLoadPost } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger, sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// for posts
sagaMiddleware.run(onLoadPost);

// for detail page
// sagaMiddleware.run(onLoadDetail);

export default store;
