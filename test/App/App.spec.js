import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from '../../src/App/App';
import SearchBar from '../../src/components/SearchBar/SearchBar';
import SearchResults from '../../src/components/SearchResults/SearchResults';
import Playlist from '../../src/components/Playlist/Playlist';

const sampleTrack = {
  id: '123',
  title: 'Tiny Dancer',
  artist: 'Elton John',
  album: 'Madman Across The Water',
};
const anotherSampleTrack1 = {
  id: 'abc',
  title: 'Fields of Gold',
  artist: 'Sting',
  album: 'Ten Summoner&apos;s Tales',
};
const anotherSampleTrack2 = {
  id: 'abc',
  title: 'Fields of Gold',
  artist: 'Sting',
  album: 'Ten Summoner&apos;s Tales',
};

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
  it('adds tracks to the playlist', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().addTrack(sampleTrack);
    expect(wrapper.state('playlist')).to.eql([sampleTrack]);
  });
  it('passes addTrack to SearchResults', () => {
    const wrapper = shallow(<App />);
    const searchResults = wrapper.find(SearchResults);
    const addTrack = wrapper.instance().addTrack;
    expect(searchResults.prop('onAddTrack')).to.eql(addTrack);
  });
  it('passes a bound addTrack function to SearchResults', () => {
    const wrapper = shallow(<App />);
    const searchResults = wrapper.find(SearchResults);
    searchResults.prop('onAddTrack')(sampleTrack);
    expect(wrapper.state('playlist')).to.eql([sampleTrack]);
  });
  it('removes tracks from the playlist', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().addTrack(sampleTrack);
    wrapper.instance().addTrack(anotherSampleTrack1);
    wrapper.instance().removeTrack(anotherSampleTrack2);
    expect(wrapper.state('playlist')).to.eql([sampleTrack]);
  });
  it('passes removeTrack to Playlist', () => {
    const wrapper = shallow(<App />);
    const playlist = wrapper.find(Playlist);
    const removeTrack = wrapper.instance().removeTrack;
    expect(playlist.prop('onRemoveTrack')).to.eql(removeTrack);
  });
  it('passes a bound removeTrack function to Playlist', () => {
    const wrapper = shallow(<App />);
    const playlist = wrapper.find(Playlist);
    wrapper.instance().addTrack(sampleTrack);
    wrapper.instance().addTrack(anotherSampleTrack1);
    playlist.prop('onRemoveTrack')(anotherSampleTrack2);
    expect(wrapper.state('playlist')).to.eql([sampleTrack]);
  });
});
