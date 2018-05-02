import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = {
    root: {
        flexGrow: 1
    }
};

const customStyles = {
    backgroundColor: '#fff',
    color: '#BDBCBF'
}

function SimpleAppBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="fixed" color="default" style={customStyles}>
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        The Redux Poster
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