import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Track from '../../src/components/TrackList/Track/Track';

describe('Track', () => {
  it('should render Track-information and Track-action', () => {
    const track = {
      title: '',
      artist: '',
      album: '',
    };
    const action = {
      symbol: '',
    };
    const wrapper = shallow(<Track track={track} action={action} />);
    expect(wrapper.find('.Track-information').exists()).to.equal(true);
    expect(wrapper.find('.Track-action').exists()).to.equal(true);
  });
  it('should render using the right props', () => {
    const track = {
      id: 1,
      title: 'Tiny Dancer',
      artist: 'Elton John',
      album: 'Madman Across The Water',
    };
    const action = {
      symbol: 'x',
    };
    const wrapper = shallow(<Track track={track} action={action} />);
    const renderedtrack = wrapper.find('.Track-information').text();
    expect(wrapper.find('.Track-action').text().includes(action.symbol)).to.equal(true);
    expect(renderedtrack.includes(track.title)).to.equal(true);
    expect(renderedtrack.includes(track.artist)).to.equal(true);
    expect(renderedtrack.includes(track.album)).to.equal(true);
  });
});
