import React, { Component } from "react";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { save, load } from "redux-localstorage-simple";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  load(),
  compose(
    applyMiddleware(...middleware, save()),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
