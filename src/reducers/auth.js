import { AUTH_LOGGED_IN } from '../actions/auth';

const initialState = {
  isCheckingAuth: true,
  isLoggedIn: false,
  token: ''
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case AUTH_LOGGED_IN: {
      const { isLoggedIn, token } = action.payload;
      return {
        ...state,
        isCheckingAuth: false,
        isLoggedIn,
        token
      };
    }
    default:
      return state;
  }
}
