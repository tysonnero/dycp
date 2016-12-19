import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
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
  chores,
  routing: routerReducer
});
