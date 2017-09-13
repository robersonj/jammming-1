import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from '../../src/App/App';
import SearchBar from '../../src/components/SearchBar/SearchBar';
import SearchResults from '../../src/components/SearchResults/SearchResults';
import PlayList from '../../src/components/PlayList/PlayList';

describe('App', () => {
  it('should render SearchBar, SearchResults and PlayList', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsAllMatchingElements([
      <SearchBar />,
      <div>
        <SearchResults />
        <PlayList />
      </div>,
    ])).to.equal(true);
  });
});
