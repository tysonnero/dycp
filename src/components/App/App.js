import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { AppToolbar, Content, SideNav } from '../index';

import './App.css';

class App extends Component {

  state = {
    docked: true
  }

  handleSidebarToggle = () => this.setState({ docked: !this.state.docked });

  render() {
    const { docked } = this.state;

    return (
      <MuiThemeProvider>
        <div className="App">
          <AppToolbar onElementLeftClick={this.handleSidebarToggle}/>
          <SideNav docked={docked}/>
          <Content sideNavDocked={docked}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
