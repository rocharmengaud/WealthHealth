import React from 'react';
// import ReactDOM from 'react-dom/client'; react 18
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './services/store';

import './index.css';

// const root = ReactDOM.createRoot(document.getElementById('root')); react 18
const root = document.getElementById('root');

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  root
);
