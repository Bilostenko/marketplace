import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './styles/common.css';
import './styles/reset.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
