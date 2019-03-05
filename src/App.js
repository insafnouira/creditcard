import React, { Component } from 'react';

import Header from './header';
import  Footer from './footer';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         {/* <img src={logo} className="App-logo" alt="logo" /> */}
         
          
        </header>
        <Header/>
        <Footer/>
       
      </div>
    );
  }
}

export default App;
