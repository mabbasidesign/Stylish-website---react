import React, { Component } from 'react';
import './navigation.css'

class Navigation extends Component {
    state = {  }
    render() { 
        return ( 
            <nav>
                <h1 className="logo">Stylish</h1>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
         );
    }
}
 
export default Navigation;