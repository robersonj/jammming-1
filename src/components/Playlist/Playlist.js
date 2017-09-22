import React from 'react';
import PropTypes from 'prop-types';
import './Playlist.css';
import TrackList from '../../components/TrackList/TrackList';

function Playlist({ title, tracks, onRemoveTrack }) {
  const action = {
    symbol: '-',
    func: onRemoveTrack,
  };
  return (
    <div className="Playlist">
      <input value={title} />
      <TrackList tracks={tracks} action={action} />
      <a className="Playlist-save" >SAVE TO SPOTIFY</a>
    </div>
  );
}
Playlist.propTypes = {
  title: PropTypes.string,
  tracks: TrackList.propTypes.tracks.isRequired,
  onRemoveTrack: PropTypes.func.isRequired,
};
Playlist.defaultProps = {
  title: 'New PlayList',
};
export default Playlist;
