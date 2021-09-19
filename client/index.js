import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'; 
import App from './App.jsx';
import store from './store.js';

// uncomment so that webpack can bundle styles
import styles from './styles/stylesheet.scss';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('contents')
);
