import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <App />
  </div>
  ,
  document.getElementById('root'));
registerServiceWorker();
