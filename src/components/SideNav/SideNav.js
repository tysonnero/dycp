import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';

class SideNav extends Component {
  static propTypes = {
    docked: PropTypes.bool.isRequired
  };

  render() {
    const { docked } = this.props;
    const drawerContainerStyle = { marginTop: 64 };

    return (
      <Drawer docked={docked} containerStyle={drawerContainerStyle}>
        <Toolbar>
          <ToolbarGroup>
            <ToolbarTitle text="Options"/>
          </ToolbarGroup>
        </Toolbar>
        <MenuItem primaryText="My Chores" containerElement={<Link to="/chores"/>}/>
        <MenuItem>Menu Item 2</MenuItem>
      </Drawer>
    );
  }
}

export default SideNav;