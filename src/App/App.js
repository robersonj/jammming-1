import React from 'react';
import './App.css';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchResults from '../components/SearchResults/SearchResults';
import PlayList from '../components/PlayList/PlayList';

function App() {
  const info = {
    title: 'Tiny Dancer',
    artist: 'Elton John',
    album: 'Madman Across The Water',
  };
  const tracks = [info, info, info];
  const playListTitle = 'My Playlist';
  return (
    <div className="App">
      <SearchBar />
      <div className="App-playlist">
        <SearchResults tracks={tracks} />
        <PlayList title={playListTitle} tracks={tracks} />
      </div>
    </div>
  );
}

export default App;
