import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/carbon-components/css/carbon-components.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
