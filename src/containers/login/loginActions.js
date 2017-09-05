import { createAction } from 'redux-actions';

export const AUTH_LOGGED_IN = 'AUTH_LOGGED_IN';

export const authLoggedInSet = createAction(AUTH_LOGGED_IN);
