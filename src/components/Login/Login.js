import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import { Redirect } from 'react-router-dom';

import FirebaseLogin from '../FirebaseLogin/FirebaseLogin';

export default class Login extends Component {
  render() {
    const { redirectLocation, isLoggedIn } = this.props;

    if (isLoggedIn) {
      return (
        <Redirect to={redirectLocation} />
      )
    }

    const containerStyles = {
      backgroundColor: this.props.backgroundColor,
      padding: '40px',
      boxSizing: 'border-box',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }

    return (
      <div style={containerStyles}>
        <Paper style={{ maxWidth: '360px', margin: '0 auto', paddingTop: '20px' }}>
          <div style={{ textAlign: 'center' }}>&lt;DYCP/&gt;</div>
          <FirebaseLogin />
        </Paper>
      </div>
    )
  }
}

Login.propTypes = {
  backgroundColor: PropTypes.string,
  isLoggedIn: PropTypes.bool,
  redirectLocation: PropTypes.string
};