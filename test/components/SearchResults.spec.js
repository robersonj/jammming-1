import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import SearchResults from '../../src/components/SearchResults/SearchResults';
import TrackList from '../../src/components/TrackList/TrackList';

describe('SearchResults', () => {
  it('should render a TrackList', () => {
    const wrapper = shallow(<SearchResults />);
    expect(wrapper.containsAllMatchingElements([
      <TrackList />,
    ])).to.equal(true);
  });
  it('should render some items', () => {
    const wrapper = mount(<SearchResults />);
    expect(wrapper.find('li')).to.have.length(3);
  });
});
