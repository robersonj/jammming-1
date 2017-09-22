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
    this.removeTrack = this.removeTrack.bind(this);
  }
  addTrack(track) {
    const notInPlaylist = this.state.playlist.every(playlistTrack =>
      playlistTrack.id !== track.id);
    if (notInPlaylist) {
      this.setState({
        playlist: this.state.playlist.concat([track]),
      });
    }
  }
  removeTrack(track) {
    this.setState({
      playlist: this.state.playlist.filter(playlistTrack =>
        playlistTrack.id !== track.id,
      ),
    });
  }
  render() {
    const sampleTrack = {
      id: '123',
      title: 'Tiny Dancer',
      artist: 'Elton John',
      album: 'Madman Across The Water',
    };
    const anotherSampleTrack = {
      id: 'abc',
      title: 'Fields of Gold',
      artist: 'Sting',
      album: 'Ten Summoner&apos;s Tales',
    };
    const tracks = [sampleTrack, anotherSampleTrack];
    const playListTitle = 'My Playlist';
    return (
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults
            tracks={tracks}
            onAddTrack={this.addTrack}
          />
          <Playlist
            title={playListTitle}
            tracks={this.state.playlist}
            onRemoveTrack={this.removeTrack}
          />
        </div>
      </div>
    );
  }
}

export default App;
