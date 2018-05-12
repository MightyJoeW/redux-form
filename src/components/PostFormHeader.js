// EXTERNAL DEPENDENCIES
import React from 'react';
import HelpIcon from '@material-ui/icons/Help';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import Tooltip from 'material-ui/Tooltip';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

// LOCAL VARIABLES
const styles = theme => ({
    root: theme.mixins.gutters({
        backgroundColor: '#2C98F0',
        paddingTop: 16,
        paddingBottom: 16,
        display: 'flex',
        alignItems: 'center'
    }),
});

// COMPONENT DEFINITION
function PaperSheet(props) {
    const { classes } = props;
    return (
        <div>
            <Paper className={classes.root} elevation={4}>
                <Typography style={{color: 'white', fontWeight: 500}} variant="headline" component="h3">
                    Create Post
                </Typography>
                <Tooltip
                    id="tooltip-icon"
                    title="Helpful articles"
                >
                    <IconButton style={{ marginLeft: 'auto' }} aria-label="Helpful articles">
                        <HelpIcon />
                    </IconButton>
                </Tooltip>
            </Paper>
        </div>
    );
}

PaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);