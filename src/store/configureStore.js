import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

let devTools = f => f;
if (typeof window === 'object'
  && typeof window.devToolsExtension !== 'undefined') {
  devTools = window.devToolsExtension();
}

export default function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(thunk),
    devTools
  )(createStore);
  return enhancer(rootReducer, initialState);
}
