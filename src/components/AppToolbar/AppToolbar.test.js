import React from 'react';
import { shallow } from 'enzyme';
import AppToolbar from './AppToolbar';

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

describe('AppToolbar', () => {
  let wrapper;
  let onElementLeftClick;

  beforeEach(() => {
    onElementLeftClick = jest.fn(() => true);
    wrapper = shallow(<AppToolbar onElementLeftClick={onElementLeftClick} />);
  });

  it('AppToolbar renders an h1', () => {
    const h1 = wrapper.find('h1').first();
    expect(h1).toBeDefined();
  });
});
