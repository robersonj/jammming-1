import React from 'react';
import './App.css';
import SearchBar from '../components/SearchBar/SearchBar';
import AppPlayList from '../components/AppPlayList/AppPlayList';
import PlayList from '../components/PlayList/PlayList';

function App() {
  return (
    <div>
      <SearchBar />
      <AppPlayList />
      <PlayList />
    </div>
  );
}

export default App;
