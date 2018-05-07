// EXTERNAL DEPENDENCIES
import React from 'react';
import AppBar from 'material-ui/AppBar';
import Loop from '@material-ui/icons/Loop';
import PropTypes from 'prop-types';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

// LOCAL VARIABLES
const appbarStyles = {
    backgroundColor: '#fff',
    color: '#999999'
}

const navItemStyles = {
    cursor: 'pointer',
    margin: '0 10px'
}

const styles = {
    root: {
        flexGrow: 1
    }
};

// COMPONENT DEFINITION
function SimpleAppBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="fixed" color="default" style={appbarStyles}>
                <Toolbar>
                        <Loop style={{marginRight: 5}}/>
                    <Typography variant="title" color="inherit" style={{marginRight: '65%'}}>
                        the-redux-poster
                    </Typography>
                    <Typography variant="subheading" color="inherit" style={navItemStyles}>
                        HOME
                    </Typography>
                    <Typography variant="subheading" color="inherit" style={navItemStyles}>
                        CREATE POST
                    </Typography>
                    <Typography variant="subheading" color="inherit" style={navItemStyles}>
                        HELP
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

SimpleAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);