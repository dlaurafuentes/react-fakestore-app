import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App'; // Cambiado de './App' a './MainApp'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App /> {/* Cambiado de <App /> a <MainApp /> */}
  </Provider>
);