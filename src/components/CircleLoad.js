// EXTERNAL DEPENDENCIES
import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from 'material-ui/Progress';
import { withStyles } from 'material-ui/styles';

// LOCAL VARIABLES
const styles = theme => ({
    progress: {
        margin: theme.spacing.unit * 2,
    },
});

// COMPONENT DEFINITION
function CircularIndeterminate(props) {
    const { classes } = props;
    return (
        <div>
            <CircularProgress className={classes.progress} size={50} />
        </div>
    );
}

CircularIndeterminate.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CircularIndeterminate);