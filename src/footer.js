import React, { Component } from 'react';
import master from './master.png';
import Valid from './valid';
import './App.css';

class Footer extends Component {
  render() {
    return (
      <div className="flex">
       <div className='p1'>
       <h2>5345</h2>
       <h3>CARDHOLDER</h3>
       </div>
       <Valid/>
       
       <img src={master} className="master" alt="logo" />
     
       </div>
       
       
     
    );
  }
}

export default Footer;
