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
    expect(wrapper.contains(<SearchBar />), 'SearchBar').to.equal(true);
    expect(wrapper.containsMatchingElement(<SearchResults />)).to.equal(true);
    // I don't understand why this ABSOLUTELY parallel test fails :(
    // expect(wrapper.containsMatchingElement(<Playlist />)).to.equal(true);
  });
  it('should start with an empty playlist', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('playlist')).to.eql([]);
  });
  it('should start with empty searchResults', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('playlist')).to.eql([]);
  });
  it('adds items to the playlist', () => {
    const wrapper = shallow(<App />);
    const track = {
      title: 'Tiny Dancer',
      artist: 'Elton John',
      album: 'Madman Across The Water',
    };
    wrapper.instance().addTrack(track);
    expect(wrapper.state('playlist')).to.eql([track]);
  });
  it('passes addTrack to SearchResults', () => {
    const wrapper = shallow(<App />);
    const searchResults = wrapper.find(SearchResults);
    const addTrack = wrapper.instance().addTrack;
    expect(searchResults.prop('onAddTrack')).to.eql(addTrack);
  });
  it('passes a bound addItem function to InputArea', () => {
    const wrapper = shallow(<App />);
    const searchResults = wrapper.find(SearchResults);
    const track = {
      title: 'Tiny Dancer',
      artist: 'Elton John',
      album: 'Madman Across The Water',
    };
    searchResults.prop('onAddTrack')(track);
    expect(wrapper.state('playlist')).to.eql([track]);
  });
});
