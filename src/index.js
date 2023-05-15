import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//install react dom : npm install react-router-dom@6
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>, 
document.getElementById('root'));


