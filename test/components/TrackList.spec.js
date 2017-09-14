import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import TrackList from '../../src/components/TrackList/TrackList';

describe('TrackList', () => {
  it('should render an unordered list', () => {
    const wrapper = shallow(<TrackList />);
    expect(wrapper.find('ul').length).to.equal(1);
  });
});
