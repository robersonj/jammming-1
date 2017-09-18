import React from 'react';
import './PlayList.css';
import TrackList from '../../components/TrackList/TrackList';

function PlayList() {
  const info = {
    title: 'Tiny Dancer',
    artist: 'Elton John',
    album: 'Madman Across The Water',
  };
  const action = {
    symbol: '-',
  };
  const infoList = [info, info, info];
  return (
    <div className="Playlist">
      <input value="New Playlist" />
      <TrackList infoList={infoList} action={action} />
      <a className="Playlist-save">SAVE TO SPOTIFY</a>
    </div>
  );
}

export default PlayList;
