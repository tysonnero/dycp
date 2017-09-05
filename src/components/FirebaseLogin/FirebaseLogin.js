import React, { Component } from 'react';

import firebase, { ui } from '../../utils/firebase';

import 'firebaseui/dist/firebaseui.css';

export default class FirebaseAuth extends Component {
  constructor(props) {
    super(props);

    this.containerRef = el => (this.container = el);

    this.uiConfig = {
      callbacks: {
        signInSuccess: (currentUser, credential, redirectUrl) => {
          return false;
        }
      },
      signInFlow: 'popup',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID
      ],
      tosUrl: 'https://www.google.com'
    };
  }

  componentDidMount() {
    ui.start(this.container, this.uiConfig);
  }

  componentWillUnmount() {
    ui.reset();
  }

  render() {
    return (
      <div ref={this.containerRef}></div>
    )
  }
}