import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Track from '../../src/components/TrackList/Track/Track';

describe('Track', () => {
  it('should render Track-information and Track-action', () => {
    const info = {
      title: '',
      artist: '',
      album: '',
    };
    const action = {
      symbol: '',
    };
    const wrapper = shallow(<Track info={info} action={action} />);
    expect(wrapper.find('.Track-information').exists()).to.equal(true);
    expect(wrapper.find('.Track-action').exists()).to.equal(true);
  });
  it('should render using the right props', () => {
    const info = {
      title: 'Tiny Dancer',
      artist: 'Elton John',
      album: 'Madman Across The Water',
    };
    const action = {
      symbol: 'x',
    };
    const wrapper = shallow(<Track info={info} action={action} />);
    const renderedInfo = wrapper.find('.Track-information').text();
    expect(wrapper.find('.Track-action').text().includes(action.symbol)).to.equal(true);
    expect(renderedInfo.includes(info.title)).to.equal(true);
    expect(renderedInfo.includes(info.artist)).to.equal(true);
    expect(renderedInfo.includes(info.album)).to.equal(true);
  });
});
