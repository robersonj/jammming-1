import React from 'react';
import PropTypes from 'prop-types';
import './Track.css';

function Track({ info, action }) {
  return (
    <li className="Track" key={info.id}>
      <div className="Track-information">
        <h3>{info.title}</h3>
        <p>{info.artist} | {info.album}</p>
      </div>
      <a className="Track-action">{action.symbol}</a>
    </li>
  );
}
Track.propTypes = {
  info: PropTypes.shape({
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
