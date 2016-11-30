import { combineReducers } from 'redux';
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
  chores
});
