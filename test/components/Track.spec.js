import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Track from '../../src/components/TrackList/Track/Track';

describe('Track', () => {
  it('should render Track-information and Track-action', () => {
    const wrapper = shallow(<Track />);
    expect(wrapper.find('.Track-information').exists()).to.equal(true);
    expect(wrapper.find('.Track-action').exists()).to.equal(true);
  });
});
