import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import PlayList from '../../src/components/PlayList/PlayList';
import TrackList from '../../src/components/TrackList/TrackList';

describe('PlayList', () => {
  it('should render an input, a TrackList and a save button', () => {
    const wrapper = shallow(<PlayList />);
    expect(wrapper.containsAllMatchingElements([
      <input />,
      <TrackList />,
      <a>SAVE TO SPOTIFY</a>,
    ])).to.equal(true);
  });
  it('should render some items', () => {
    const wrapper = mount(<PlayList />);
    expect(wrapper.find('li')).to.have.length(3);
  });
});
