import { USER_LOGIN, USER_LOGOUT } from '../actions/user';

const initialState = {};

export default function user(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN: {
      return {
        ...state,
        id: action.payload.uid,
        name: action.payload.displayName,
        email: action.payload.email,
        photo: action.payload.photoURL
      };
    }
    case USER_LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
}
