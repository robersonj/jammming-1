import React from 'react';
import PropTypes from 'prop-types';
import './PlayList.css';
import TrackList from '../../components/TrackList/TrackList';

function PlayList({ title, tracks }) {
  const action = {
    symbol: '-',
  };
  return (
    <div className="Playlist">
      <input value={title} />
      <TrackList tracks={tracks} action={action} />
      <a className="Playlist-save" >SAVE TO SPOTIFY</a>
    </div>
  );
}
PlayList.propTypes = {
  title: PropTypes.string,
  tracks: TrackList.propTypes.tracks.isRequired,
};
PlayList.defaultProps = {
  title: 'New PlayList',
};
export default PlayList;
