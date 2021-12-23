import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducerLogin } from "../reducers/reducerLogin";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  userLogin: reducerLogin,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
