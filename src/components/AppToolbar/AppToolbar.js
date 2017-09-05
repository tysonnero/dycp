import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class AppToolbar extends Component {
  static propTypes = {
    onElementLeftClick: PropTypes.func.isRequired,
    onSignOut: PropTypes.func,
    userImageUrl: PropTypes.string
  };

  state = {
    userMenuOpen: false
  }

  handleOpenUserMenu = (e) => {
    e.preventDefault();
    this.setState({
      open: true,
      userMenuAnchorEl: e.currentTarget,
    });
  }

  handleCloseUserMenu = () => {
    this.setState({ open: false });
  };

  render() {
    const { onElementLeftClick, onSignOut, userImageUrl } = this.props;

    const userMenu = (
      <div>
        <Avatar
          onClick={this.handleOpenUserMenu}
          src={userImageUrl}
          size={30} />
        <Popover
          open={this.state.open}
          anchorEl={this.state.userMenuAnchorEl}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'right', vertical: 'top' }}
          onRequestClose={this.handleCloseUserMenu}>
          <Menu>
            <MenuItem onClick={onSignOut} primaryText="Sign out" />
          </Menu>
        </Popover>
      </div>
    );

    return (
      <div>
        <AppBar
          title="<DYCP/>"
          iconElementLeft={<IconButton onTouchTap={onElementLeftClick}><NavigationMenu /></IconButton>}
          iconElementRight={userMenu}
          iconStyleRight={{ display: 'flex', alignItems: 'center', marginTop: 0 }}
          style={{ position: 'fixed' }}
        />
      </div>
    );
  }
}

export default AppToolbar;
