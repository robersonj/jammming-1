import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

function App(props) {
  return (
    <div>{props.message}</div>
  );
}
App.propTypes = {
  message: PropTypes.string.isRequired,
};

export default App;
