import React, { Component } from 'react';
import './header.css';
import background from './img/bg-masthead.jpg';

const mystyles = {
    backgroundImage: `url(${background})`,
    // backgroundImage: "url(" + { Background } + ")",
    height: '50vh',
    backgroundSize: 'cover',
}

class Heaer extends Component {
    state = {  }
    render() { 
        return ( 
            <header style={mystyles}>
                <h1>{this.props.title}</h1>
                <p> A Free Bootstrap Theme by Start Bootstrap </p>
                <a href="#">{this.props.button}</a>
            </header>
         );
    }
}
 
export default Heaer;
