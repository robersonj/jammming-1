import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Playlist from '../../src/components/Playlist/Playlist';
import TrackList from '../../src/components/TrackList/TrackList';

describe('Playlist', () => {
  it('should render an input, a TrackList and a save button', () => {
    const wrapper = shallow(<Playlist title="" tracks={[]} />);
    expect(wrapper.containsAllMatchingElements([
      <input />,
      <TrackList />,
      <a>SAVE TO SPOTIFY</a>,
    ])).to.equal(true);
  });
  it('should render the input with props.title', () => {
    const title = 'TestList';
    const wrapper = shallow(<Playlist title={title} tracks={[]} />);
    expect(wrapper.find('input').html().includes(title)).to.equal(true);
  });
});
