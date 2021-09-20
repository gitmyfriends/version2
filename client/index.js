import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'; 
import App from './App.jsx';
import store from './store.js';
import { BrowserRouter } from 'react-router-dom';
// uncomment so that webpack can bundle styles
import styles from './styles/stylesheet.scss';


ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById('contents')
);
