import React, { Component } from 'react';
import './App.css';
import Navigation from './navigation';
import Header from './header';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation logoTitle="Stylish"/>
        <Header title="Stylish Portfolio"  button="Find Out More"/>
      </div>
    );
  }
}

export default App;
