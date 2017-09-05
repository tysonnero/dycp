import firebase from 'firebase';
import * as firebaseui from 'firebaseui';

export const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL
};

firebase.initializeApp(config);

export const ui = new firebaseui.auth.AuthUI(firebase.auth());
export const auth = firebase.auth();
export default firebase;