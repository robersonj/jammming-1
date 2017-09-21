import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import TrackList from '../../src/components/TrackList/TrackList';

describe('TrackList', () => {
  it('should render an unordered list', () => {
    const wrapper = shallow(<TrackList tracks={[]} action={{ symbol: 'x' }} />);
    expect(wrapper.find('ul').length).to.equal(1);
  });
  it('should render zero items', () => {
    const wrapper = shallow(<TrackList tracks={[]} action={{ symbol: 'x' }} />);
    expect(wrapper.find('li')).to.have.length(0);
  });

  it('should render some items', () => {
    const info = {
      title: 'Tiny Dancer',
      artist: 'Elton John',
      album: 'Madman Across The Water',
    };
    const action = {
      symbol: '+',
    };
    const tracks = [info, info, info];
    const wrapper = mount(<TrackList tracks={tracks} action={action} />);
    expect(wrapper.find('li')).to.have.length(3);
  });
});
