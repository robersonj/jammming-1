import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';

function SearchResults() {
  const info = {
    title: 'Tiny Dancer',
    artist: 'Elton John',
    album: 'Madman Across The Water',
  };
  const action = {
    symbol: '+',
  };
  const infoList = [info, info, info];
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList infoList={infoList} action={action} />
    </div>
  );
}

export default SearchResults;
