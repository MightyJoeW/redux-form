// External Dependencies
import React from 'react';
import moment from 'moment';

// Local Variables
const rootStyles = {
    color: 'lightBlack',
    fontSize: 13,
    padding: '24px 0',
    textAlign: 'center',
};

const currentYear = moment().year();

const Footer = () => (
    <div style={rootStyles}>
        Copyright © {currentYear} Mighty-Joe-Tech. All Rights Reserved.
        </div>
)

export default Footer;