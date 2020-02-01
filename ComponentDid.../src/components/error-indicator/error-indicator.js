import React from 'react';

import './error-indicator.css'
// import image throught webpack
import icon from './th.jpeg';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error image" />
            <span className="boom">BOOM!</span>
            <span>
                something has gone terribe wrong
            </span>
            <span>
                drons
            </span>
        </div>
    );
};

export default ErrorIndicator;