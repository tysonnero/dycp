import React from 'react';
import { Route } from 'react-router';
import App from './components/App/App';

export default () =>
  (
    <Route path="/" component={App}>
    </Route>
  );