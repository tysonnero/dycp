import { createAction } from 'redux-actions';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

export const loginUser = createAction(USER_LOGIN);
export const logoutUser = createAction(USER_LOGOUT);
