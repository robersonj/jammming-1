import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App message="Up and running!" />, document.getElementById('root'));
registerServiceWorker();
