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
  it('should start with an empty list', () => {
    const wrapper = shallow(<PlayList />);
    expect(wrapper.state('tracks')).to.eql([]);
  });
  it('adds tracks to the list', () => {
    const info = {
      title: 'Tiny Dancer',
      artist: 'Elton John',
      album: 'Madman Across The Water',
    };
    const wrapper = shallow(<PlayList />);
    wrapper.instance().addTrack(info);
    expect(wrapper.state('tracks')).to.eql([info]);
  });
  it('should render some items', () => {
    const info = {
      title: 'Tiny Dancer',
      artist: 'Elton John',
      album: 'Madman Across The Water',
    };
    const wrapper = mount(<PlayList />);
    wrapper.instance().addTrack(info);
    wrapper.instance().addTrack(info);
    wrapper.instance().addTrack(info);
    expect(wrapper.find('li')).to.have.length(3);
  });
});
