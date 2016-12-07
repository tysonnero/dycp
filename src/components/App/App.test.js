import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('App', () => {
  let wrapper;
  let onElementLeftClick;

  beforeEach(() => {
    onElementLeftClick = jest.fn(() => true);
    wrapper = shallow(<App/>);
  });

  it('App renders nested components', () => {
    expect(wrapper.find('AppToolbar').length).toEqual(1);
    expect(wrapper.find('SideNav').length).toEqual(1);
  });

  it('onElementLeftClick hides SideNav', () => {
    const appToolbar = wrapper.find('AppToolbar').first();
    appToolbar.props().onElementLeftClick();
    wrapper.update();
    const docked = wrapper.state().docked;
    expect(docked).toEqual(false);
  });

  it('onElementLeftClick toggles SideNav', () => {
    const appToolbar = wrapper.find('AppToolbar').first();
    // Click twice
    appToolbar.props().onElementLeftClick();
    appToolbar.props().onElementLeftClick();
    wrapper.update();
    const docked = wrapper.state().docked;
    expect(docked).toEqual(true);
  });
});
