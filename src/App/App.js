import React from 'react';
import './App.css';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchResults from '../components/SearchResults/SearchResults';
import PlayList from '../components/PlayList/PlayList';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <div className="App-playlist">
        <SearchResults />
      </div>
      <PlayList />
    </div>
  );
}

export default App;
