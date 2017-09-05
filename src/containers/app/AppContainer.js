import { connect } from 'react-redux';

import { App } from '../../components';
import { handleAuthStateChange } from '../../actions/auth';

import { getChores } from '../../actions/index';

const mapStateToProps = (state, ownProps) => ({
  isLoading: state.auth.isCheckingAuth,
  isLoggedIn: state.auth.isLoggedIn,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  onGetChores: () => (dispatch(getChores())),
  onAuthStateChanged: () => (dispatch(handleAuthStateChange()))
});

const AppContainer = connect(
  mapStateToProps, mapDispatchToProps
)(App);

export default AppContainer;
