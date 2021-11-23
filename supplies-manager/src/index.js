import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Navbar from './components/navTop.js';


ReactDOM.render(
  <React.StrictMode>
  <Navbar />

    <App />

  </React.StrictMode>,
  document.getElementById('root')
);

