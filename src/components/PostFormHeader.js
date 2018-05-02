import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    root: theme.mixins.gutters({
        backgroundColor: '#2C98F0',
        paddingTop: 16,
        paddingBottom: 16
    }),
});

function PaperSheet(props) {
    const { classes } = props;
    return (
        <div>
            <Paper className={classes.root} elevation={4}>
                <Typography style={{color: 'white', fontWeight: 500}} variant="headline" component="h3">
                    Create Post
                {/* <Help /> */}
                </Typography>
            </Paper>
        </div>
    );
}

PaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);