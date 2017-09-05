import { createAction } from 'redux-actions';

import { auth } from '../utils/firebase';
import { loginUser, logoutUser } from './user';

export const AUTH_LOGGED_IN = 'AUTH_LOGGED_IN';

export const setLoggedIn = createAction(AUTH_LOGGED_IN, (isLoggedIn, token) => ({ isLoggedIn, token }));

export const handleAuthStateChange = () => {
  return dispatch => {
    return auth.onAuthStateChanged(user => {

      if (user) {
        auth.currentUser.getIdToken()
          .then((idToken) => {
            if (idToken) {
              dispatch(setLoggedIn(true, idToken));
              dispatch(loginUser(user));
            }
          })
          .catch(error => {
            throw new Error(error);
          })
      }
      else {
        dispatch(setLoggedIn(false));
        dispatch(logoutUser());
      }
    });
  }
};
