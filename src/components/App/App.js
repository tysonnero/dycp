import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import PrivateRoute from '../PrivateRoute/PrivateRoute';
import { AppLoading, AppMain } from '../';
import LoginContainer from '../../containers/login/LoginContainer';

import './App.css';

export default class App extends Component {
  componentDidMount() {
    this.removeOnAuthStateChanged = this.props.onAuthStateChanged();
  }

  componentWillUnmount() {
    this.removeOnAuthStateChanged()
  }

  render() {
    const { isLoading, isLoggedIn } = this.props;

    return (
      <MuiThemeProvider>
        <div className="App">
          {isLoading ?
            <AppLoading /> :
            !isLoggedIn ? (
              <Switch>
                <Route path="/login" component={LoginContainer} />
                <PrivateRoute authenticated={false} component={LoginContainer} />
              </Switch>
            ) : (
              <AppMain
                isLoggedIn={isLoggedIn}
                onGetChores={this.props.onGetChores}
                user={this.props.user} />
            )}
          }
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  isLoading: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
  onAuthStateChanged: PropTypes.func,
  onGetChores: PropTypes.func,
  user: PropTypes.object
};
