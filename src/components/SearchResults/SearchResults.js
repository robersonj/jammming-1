import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';

function SearchResults({ tracks }) {
  const action = {
    symbol: '+',
  };
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList tracks={tracks} action={action} />
    </div>
  );
}
SearchResults.propTypes = {
  tracks: TrackList.propTypes.tracks.isRequired,
};

export default SearchResults;
