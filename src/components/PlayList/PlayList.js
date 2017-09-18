import React from 'react';
import './PlayList.css';
import TrackList from '../../components/TrackList/TrackList';

class PlayList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
    };
  }
  addTrack(info) {
    this.setState({
      tracks: this.state.tracks.concat(info),
    });
  }
  render() {
    const action = {
      symbol: '-',
    };
    return (
      <div className="Playlist">
        <input value="New Playlist" />
        <TrackList infoList={this.state.tracks} action={action} />
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default PlayList;
