import React, { Component } from 'react';
import './Options.css';
import logo from '../logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Navbar';
import HomePage from './HomePage'

class Options extends Component {
  state = {};

  render() {
    return (
      <body>
        <NavBar/>
        <HomePage/>
      </body>
    );  
  }
}

export default Options;
