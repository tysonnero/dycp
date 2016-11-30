import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import { GridList, GridTile } from 'material-ui/GridList';

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
            <GridList
              cellHeight={'auto'}
              cols={1}
            >
              <GridTile style={{ padding: 20 }}>
                <Card initiallyExpanded={true}>
                  <CardHeader
                    title="Without Avatar"
                    subtitle="Subtitle"
                    actAsExpander={true}
                    showExpandableButton={true}
                  />
                  <CardActions>
                    <FlatButton label="Action1"/>
                    <FlatButton label="Action2"/>
                  </CardActions>
                  <CardText expandable={true}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                  </CardText>
                </Card>
              </GridTile>
            </GridList>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
