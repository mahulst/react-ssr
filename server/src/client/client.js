// Startup point for client side application
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home.js'
import Routes from './Routes.js';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.hydrate(
    <BrowserRouter>
      <Routes />
    </BrowserRouter>,
  document.querySelector('#root'));
