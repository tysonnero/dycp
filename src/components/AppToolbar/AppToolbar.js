import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';

class AppToolbar extends Component {
  static propTypes = {
    onElementLeftClick: PropTypes.func.isRequired
  };

  render() {
    const { onElementLeftClick } = this.props;

    return (
      <div>
        <AppBar
          title="<DYCP/>"
          iconElementLeft={<IconButton onTouchTap={onElementLeftClick}><NavigationMenu /></IconButton>}
          iconElementRight={<IconButton><ExpandMore /></IconButton>}
          style={{ position: 'fixed' }}
        />
      </div>
    );
  }
}

export default AppToolbar;
