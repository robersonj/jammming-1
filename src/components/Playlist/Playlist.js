import React from 'react';
import PropTypes from 'prop-types';
import './Playlist.css';
import TrackList from '../../components/TrackList/TrackList';

function Playlist({ title, tracks }) {
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
Playlist.propTypes = {
  title: PropTypes.string,
  tracks: TrackList.propTypes.tracks.isRequired,
};
Playlist.defaultProps = {
  title: 'New PlayList',
};
export default Playlist;
