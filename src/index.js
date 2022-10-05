import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom'; // https://stackoverflow.com/a/71985764
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const app = (
  <Router>
    <App />
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
