import React from 'react';
import PropTypes from 'prop-types';
import './Track.css';

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.action.func(this.props.track);
  }

  renderPreviewIcon() {
    if(this.props.track.preview) {
      return <a href={this.props.track.preview} target="_blank"><i className="fa fa-play-circle-o Track-preview-icon" aria-hidden="true"></i></a>
    } else {
      return <p className="Track-preview-unavailable">No <br/> Preview <br />Available</p>
    }
  }

  render() {
    return (
      <li className="Track" key={this.props.track.id}>
        <div className="Track-cover-preview">
          <div className="Track-preview-container">
            {this.renderPreviewIcon()}
          </div>
          <img className="Track-album-cover" src={this.props.track.cover} alt="album cover"/>
        </div>
        <div className="Track-information">
          <h3>{this.props.track.title}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <button
          className="Track-action"
          onClick={this.handleClick}
        >{this.props.action.symbol}</button>
      </li>
    );
  }
}
Track.propTypes = {
  track: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    album: PropTypes.string.isRequired,
  }).isRequired,
  action: PropTypes.shape({
    symbol: PropTypes.string.isRequired,
    func: PropTypes.func.isRequired,
  }).isRequired,
};

export default Track;
