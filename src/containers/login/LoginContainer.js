import { connect } from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Login from '../../components/Login/Login';

const theme = getMuiTheme();

const mapStateToProps = (state, ownProps) => ({
  backgroundColor: theme.palette.primary1Color,
  isLoggedIn: state.auth.isLoggedIn,
  redirectLocation: (ownProps.location.state && ownProps.location.state.from) || '/'
});

const LoginContainer = connect(
  mapStateToProps
)(Login);

export default LoginContainer;
