import React, { Component } from 'react';
import puce from './puce.png'

import './App.css';

class Header extends Component {
  render() {
    return (
        <div>
      <div className="Title">
        <h1> CREDIT CARD</h1>
      </div>
       <img src={puce} className="puce" alt="logo" />
       <div className="rip">
        <h3> 7253 4567 3214 3456</h3>
      </div>

       </div>
    );
  }
}

export default Header;
