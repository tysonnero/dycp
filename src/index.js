import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { configureStore } from './store/configureStore';
import AppContainer from './containers/app/AppContainer';

import 'material-design-icons/iconfont/material-icons.css';
import './index.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const history = createHistory();
const store = configureStore(history);

/* eslint-disable react/jsx-filename-extension */
ReactDOM.render(
  <Provider store={store}>
    {/* ConnectedRouter will use the store from Provider automatically */}
    <ConnectedRouter history={history}>
      <AppContainer />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);