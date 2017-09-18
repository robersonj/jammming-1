import React from 'react';
import PropTypes from 'prop-types';
import Track from './Track/Track';
import './TrackList.css';

function TrackList({ infoList, action }) {
  return infoList ?
    (
      <ul className="TrackList">
        {infoList.map((item, index) => {
          const info = item;
          info.id = `${index}`;
          return (
            <Track info={info} action={action} />
          );
        })
        }
      </ul>
    ) : null;
}
TrackList.propTypes = {
  infoList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    album: PropTypes.string.isRequired,
  })).isRequired,
  action: PropTypes.shape({
    symbol: PropTypes.string.isRequired,
  }).isRequired,
};
export default TrackList;
