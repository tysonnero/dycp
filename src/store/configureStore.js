import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from '../reducers';

let devTools = f => f;

if (typeof window === 'object' && typeof window.devToolsExtension !== 'undefined') {
  devTools = window.devToolsExtension();
}

let store = null;

function create(...args) {
  if (!store) {
    store = createStore(...args);
  }

  return store;
}

function configureStore(history, initialState) {
  return create(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, routerMiddleware(history)),
      devTools
    )
  );
}

export { configureStore, store };
