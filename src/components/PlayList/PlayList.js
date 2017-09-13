import React from 'react';
import './PlayList.css';
import TrackList from '../../components/TrackList/TrackList';

function PlayList() {
  return (
    <div className="Playlist">
      <input value="New Playlist" />
      <TrackList />
      <a className="Playlist-save">SAVE TO SPOTIFY</a>
    </div>
  );
}

export default PlayList;
