import React, { Component, PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';

class SideNav extends Component {
  static propTypes = {
    docked: PropTypes.bool.isRequired
  };

  render() {
    const { docked } = this.props;
    const drawContainerStyle = { marginTop: 64 };

    return (
      <Drawer docked={docked} containerStyle={drawContainerStyle}>
        <Toolbar>
          <ToolbarGroup>
            <ToolbarTitle text="Options"/>
          </ToolbarGroup>
        </Toolbar>
        <MenuItem>Menu Item</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
      </Drawer>
    );
  }
}

export default SideNav;