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

                        <Icons icon={iconObj[0].icon} title={iconObj[0].title} description={iconObj[0].description} />

                        <Icons icon={iconObj[1].icon} title={iconObj[1].title} description={iconObj[1].description} />

                        <Icons icon={iconObj[2].icon} title={iconObj[2].title} description={iconObj[2].description} />

                        <Icons icon={iconObj[3].icon} title={iconObj[3].title} description={iconObj[3].description} />

                    </div>
                </div>
         );
    }
}
 

const iconObj = [
    {
        icon:<ion-icon name="phone-portrait"></ion-icon>,
        title: 'Responsive',
        description: 'Looks great on any screen size'
    },
    {
        icon:<ion-icon name="brush"></ion-icon>,
        title: 'Redesign',
        description: 'Freshly redesigned'
    },
    {
        icon:<ion-icon name="thumbs-up"></ion-icon>,
        title: 'Favorite',
        description: 'Milion of users'
    },
    {
        icon:<ion-icon name="help"></ion-icon>,
        title: 'Question',
        description: 'I mustache you a question...'
    },
];

class Icons extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div>
                    <span>{this.props.icon}</span>
                    <h4>{this.props.title}</h4>
                    <p>{this.props.description}</p>
                </div>
            </div>
         );
    }
}
 
// export default Icon;

export default Services;