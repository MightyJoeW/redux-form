// EXTERNAL DEPENDENCIES
import React from 'react';
import moment from 'moment';

// LOCAL VARIABLES
const rootStyles = {
    color: 'lightBlack',
    fontSize: 13,
    padding: '24px 0',
    textAlign: 'center',
};

const currentYear = moment().year();

// COMPONENT DEFINITION
const Footer = () => (
    <div style={rootStyles}>
        Copyright © {currentYear} Mighty-Joe-Tech. All Rights Reserved.
        </div>
)

export default Footer;