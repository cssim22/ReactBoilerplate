/**
 * ************************************
 *
 * @module index.js
 * @author Andy Kahn, Angela Franco, Cameron Simmons, Lorenzo Guevara, Mika Todd
 * @date 7/6/2021
 * @description Serves as the entrypoint for webpack to go in, parse and resolve all imported and referenced dependencies to create a bundle.js. Additionally, renders the App component to the index.html file.
 *
 * ************************************
 */

import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';

 
render(
  <App />,
  document.getElementById('root')
);