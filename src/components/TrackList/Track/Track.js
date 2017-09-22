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
  render() {
    return (
      <li className="Track" key={this.props.track.id}>
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
