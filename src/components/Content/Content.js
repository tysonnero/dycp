import React, { Component, PropTypes } from 'react';

import { ChoreList } from '../';

class Content extends Component {

  static propTypes = {
    sideNavDocked: PropTypes.bool.isRequired
  };

  render() {
    const { sideNavDocked } = this.props;

    return (
      <div style={{
        paddingTop: 64,
        marginLeft: sideNavDocked ? 256 : 0,
        transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
      }}>
        <ChoreList/>
      </div>
    );
  }
}

export default Content;
