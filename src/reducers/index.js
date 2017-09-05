import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth';
import user from './user';
import chores from './chores';

/**
 * State shape
 *
 * {
 *   chores: {
 *     byId: {}, allIds : []
 *   }
 */

export default combineReducers({
  auth,
  user,
  chores,
  routing: routerReducer
});
