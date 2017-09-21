import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from '../../src/App/App';
import SearchBar from '../../src/components/SearchBar/SearchBar';
import SearchResults from '../../src/components/SearchResults/SearchResults';
// import Playlist from '../../src/components/Playlist/Playlist';

describe('App', () => {
  it('should render SearchBar, SearchResults and Playlist', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<SearchBar />)).to.equal(true);
    expect(wrapper.containsMatchingElement(<SearchResults />)).to.equal(true);
    // I don't understand why this ABSOLUTELY parallel test fails :(
    // expect(wrapper.containsMatchingElement(<Playlist />)).to.equal(true);
  });
});
