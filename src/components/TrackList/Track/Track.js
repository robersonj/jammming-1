import React from 'react';
import PropTypes from 'prop-types';
import './Track.css';

function Track({ track, action }) {
  return (
    <li className="Track" key={track.id}>
      <div className="Track-information">
        <h3>{track.title}</h3>
        <p>{track.artist} | {track.album}</p>
      </div>
      <a className="Track-action">{action.symbol}</a>
    </li>
  );
}
Track.propTypes = {
  track: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    album: PropTypes.string.isRequired,
  }).isRequired,
  action: PropTypes.shape({
    symbol: PropTypes.string.isRequired,
  }).isRequired,
};

export default Track;
