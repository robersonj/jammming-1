import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from '../../src/App/App';
import SearchBar from '../../src/components/SearchBar/SearchBar';
import AppPlayList from '../../src/components/AppPlayList/AppPlayList';
import PlayList from '../../src/components/PlayList/PlayList';

describe('App', () => {
  it('should render SearchBar, AppPlayList and PlayList', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsAllMatchingElements([
      <SearchBar />,
      <AppPlayList />,
      <PlayList />,
    ])).to.equal(true);
  });
});
