import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import { auth } from '../../utils/firebase'
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import { AppToolbar, SideNav, ChoreList, Privacy, Terms } from '../';
import LoginContainer from '../../containers/login/LoginContainer';

export default class AppMain extends Component {
  state = {
    docked: true
  }

  componentDidMount() {
    this.props.onGetChores();
  }

  handleSidebarToggle = () => this.setState({ docked: !this.state.docked });

  handleSignOut = () => auth.signOut();

  render() {
    const { docked } = this.state;
    const { isLoggedIn, user } = this.props;

    return (
      <div>
        <AppToolbar onElementLeftClick={this.handleSidebarToggle} onSignOut={this.handleSignOut} userImageUrl={user.photo} />
        <SideNav docked={docked} />
        <div style={{
          paddingTop: 64,
          marginLeft: docked ? 256 : 0,
          transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
        }}>
          <Switch>
            <Route path="/login" component={LoginContainer} />
            <Route path="/terms" component={Terms} />
            <Route path="/privacy" component={Privacy} />
            <PrivateRoute exact path='/' authenticated={isLoggedIn} component={ChoreList} />
            <PrivateRoute authenticated={isLoggedIn} path='/chores' component={ChoreList} />
          </Switch>
        </div>
      </div>
    )
  }
};

AppMain.propTypes = {
  isLoggedIn: PropTypes.bool,
  onGetChores: PropTypes.func,
  user: PropTypes.object
};