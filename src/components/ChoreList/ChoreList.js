import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import { GridList, GridTile } from 'material-ui/GridList';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';

class ChoreList extends Component {

  render() {
    const gridTileStyle = { padding: '0 10px', overflow: 'visible' };

    return (
      <GridList
        cellHeight={'auto'}
        cols={1}
        padding={20}
        style={{ margin: '5px 0' }}
      >
        <GridTile style={gridTileStyle}>
          <Card initiallyExpanded={true}>
            <CardTitle
              title="Monday"
              subtitle="Thu, Dec 8"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText expandable={true}>
              <List>
                <Subheader>Daily Deeds</Subheader>
                <ListItem
                  leftCheckbox={<Checkbox />}
                  primaryText="Make Bed"
                  secondaryText="Sheet and blanket should be pulled all the way up. Pillows should be nice."
                />
                <ListItem
                  leftCheckbox={<Checkbox />}
                  primaryText="Tidy Room"
                  secondaryText="Put away clothes, clean up floor, clear off desks, clear off dressers."
                />
                <ListItem
                  leftCheckbox={<Checkbox />}
                  primaryText="Take Dogs Out"
                  secondaryText="Dogs need to go out once in the morning and once at night after they eat."
                />
              </List>
              <List>
                <Subheader>Daily Chores</Subheader>
                <ListItem
                  leftCheckbox={<Checkbox />}
                  primaryText="Empty Dishwasher and Dish Rack"
                  secondaryText="Dry and put everything away. Don't stack cups."
                />
                <ListItem
                  leftCheckbox={<Checkbox />}
                  primaryText="Vacuum Upstairs"
                />
              </List>
            </CardText>
            <CardActions expandable={true}>
              <FlatButton label="Finish" primary={true}/>
              <FlatButton label="Skip"/>
            </CardActions>
          </Card>
        </GridTile>
        <GridTile style={gridTileStyle}>
          <Card initiallyExpanded={true}>
            <CardTitle
              title="Tuesday"
              subtitle="Tues, Dec 9"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText expandable={true}>
              <List>
                <Subheader>Daily Deeds</Subheader>
                <ListItem
                  leftCheckbox={<Checkbox />}
                  primaryText="Make Bed"
                  secondaryText="Sheet and blanket should be pulled all the way up. Pillows should be nice."
                />
                <ListItem
                  leftCheckbox={<Checkbox />}
                  primaryText="Tidy Room"
                  secondaryText="Put away clothes, clean up floor, clear off desks, clear off dressers."
                />
                <ListItem
                  leftCheckbox={<Checkbox />}
                  primaryText="Clean Up After Yourself"
                  secondaryText="Clean up your toys, remotes, homework around the house."
                />
              </List>
              <List>
                <Subheader>Daily Chores</Subheader>
                <ListItem
                  leftCheckbox={<Checkbox />}
                  primaryText="Organize Shoes In Closet"
                  secondaryText="Make the shoes nice in both coat closets downstairs"
                />
              </List>
            </CardText>
            <CardActions expandable={true}>
              <FlatButton label="Finish" primary={true}/>
              <FlatButton label="Skip"/>
            </CardActions>
          </Card>
        </GridTile>
      </GridList>
    );
  }
}

export default ChoreList;
