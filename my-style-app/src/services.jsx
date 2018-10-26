import React, { Component } from 'react';
import './services.css';

class Services extends Component {
    state = {  }
    render() { 
        return (
                <div className="services">
                    <h3>Services</h3>
                    <h2>What We Offer</h2>
                    <div className="row">
                        <div>
                            <span><ion-icon name="phone-portrait"></ion-icon></span>
                            <h4>Responsive</h4>
                            <p>Looks great on any screen size</p>
                        </div>
                        <div>
                            <span><ion-icon name="brush"></ion-icon></span>
                            <h4>Redesign</h4>
                            <p>Freshly redesigned</p>
                        </div>
                        <div>
                            <span><ion-icon name="thumbs-up"></ion-icon></span>
                            <h4>Favorite</h4>
                            <p>Milion of users</p>
                        </div>
                        <div>
                            <span><ion-icon name="help"></ion-icon></span>
                            <h4>Question</h4>
                            <p>I mustache you a question...</p>
                        </div>
                    </div>
                </div>
         );
    }
}
 
export default Services;