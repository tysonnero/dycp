import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, ChoreList } from './components';

export default () =>
  (
    <Route path="/" component={App}>
      <IndexRoute component={ChoreList}/>
      <Route path="/chores" component={ChoreList}/>
    </Route>
  );