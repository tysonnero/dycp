import { connect } from 'react-redux';

import { AppLoading } from '../../components';

const mapStateToProps = (state, ownProps) => ({
  isLoading: state.auth.isCheckingAuth
});

const AppContainer = connect(
  mapStateToProps
)(AppLoading);

export default AppContainer;
