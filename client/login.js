import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.jsx';

// uncomment so that webpack can bundle styles
import styles from './styles/stylesheet.scss';


render(
  <App />,
   document.getElementById('root'),

);
