import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UserDetails } from './context';

ReactDOM.render(
  <UserDetails>
  <React.StrictMode>
    <App/>
  </React.StrictMode>
  </UserDetails>,
  document.getElementById('root')
);