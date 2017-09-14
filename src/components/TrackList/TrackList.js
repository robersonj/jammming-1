import React from 'react';
import Track from './Track/Track';
import './TrackList.css';

function TrackList() {
  return (
    <ul className="TrackList">
      <Track />
      <Track />
      <Track />
    </ul>
  );
}

export default TrackList;
