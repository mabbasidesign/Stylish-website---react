import React, { Component } from 'react';
import './navigation.css'

class Navigation extends Component {
    state = {  }
    render() {
        const sections = ['Home', 'About', 'Service', 'Portfolio', 'Contact'];
        const navLinks = sections.map(section => {
            return (
                <li><a href={"#" + section}>{section}</a></li>
            )
        })
        return ( 
            <nav>
                <h1 className="logo"> {this.props.logoTitle} </h1>
                <ul>
                    {navLinks}
                </ul>
            </nav>
         );
    }
}
 
export default Navigation;