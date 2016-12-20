import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { AppToolbar, SideNav } from '../index';

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
          <div style={{
            paddingTop: 64,
            marginLeft: docked ? 256 : 0,
            transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
          }}>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
