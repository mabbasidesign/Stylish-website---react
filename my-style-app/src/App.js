import React, { Component } from 'react';
import './App.css';
import Navigation from './navigation';
import Header from './header';
import Services from './services';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation logoTitle="Stylish"/>
        <Header title="Stylish Portfolio"  button="Find Out More"/>
        <Services />
      </div>
    );
  }
}

export default App;
