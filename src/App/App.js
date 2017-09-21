import React from 'react';
import './App.css';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchResults from '../components/SearchResults/SearchResults';
import Playlist from '../components/Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlist: [],
    };
    this.addTrack = this.addTrack.bind(this);
  }
  addTrack(track) {
    this.setState({
      playlist: this.state.playlist.concat([track]),
    });
  }
  render() {
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
          <SearchResults tracks={tracks} onAddTrack={this.addTrack} />
          <Playlist title={playListTitle} tracks={this.state.playlist} />
        </div>
      </div>
    );
  }
}

export default App;
