import React from 'react';
import PropTypes from 'prop-types';
import Track from './Track/Track';
import './TrackList.css';

function TrackList({ tracks, action }) {
  return (
    <ul className="TrackList">
      {tracks.map(track =>
        <Track track={track} action={action} />,
      )
      }
    </ul>
  );
}
TrackList.propTypes = {
  tracks: PropTypes.arrayOf(Track.propTypes.track).isRequired,
  action: Track.propTypes.action.isRequired,
};
export default TrackList;
