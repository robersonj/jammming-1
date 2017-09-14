import React from 'react';
import './Track.css';

function Track() {
  return (
    <li className="Track">
      <div className="Track-information">
        <h3>Tiny Dancer</h3>
        <p>Elton John | Madman Across The Water</p>
      </div>
      <a className="Track-action">+</a>
    </li>
  );
}

export default Track;
