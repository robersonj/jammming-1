import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import SearchBar from '../../src/components/SearchBar/SearchBar';

describe('SearchBar', () => {
  it('should render an input and a button', () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.containsAllMatchingElements([
      <input />,
      <a>SEARCH</a>,
    ])).to.equal(true);
  });
});
