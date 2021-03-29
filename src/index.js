import React from 'react';
import ReactDOM from 'react-dom';
import 'core-js/stable';
import 'regenerator-runtime';
import App from './App';
import DefaultErrorBoundary from './error/DefaultErrorBoundary';

if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}
ReactDOM.render(
  <React.StrictMode>
    <DefaultErrorBoundary>
      <App message="Hi from boilerplat" />
    </DefaultErrorBoundary>
  </React.StrictMode>,
  document.getElementById('app')
);
