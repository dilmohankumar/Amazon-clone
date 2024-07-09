import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import "slick-carousel/slick/slick.css";
import firebaseConfig from './firebaseconfig';
import App from './App';
import { persistor, store } from './Redux/store';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <PersistGate loading={'loading'} persistor={persistor}>
    <App/>
  </PersistGate>
  </Provider> 
);
