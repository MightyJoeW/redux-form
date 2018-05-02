import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import HelpIcon from '@material-ui/icons/Help';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';

const styles = theme => ({
    fab: {
        margin: theme.spacing.unit * 2,
    },
    absolute: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 3,
    },
});

function SimpleTooltips(props) {
    const { classes } = props;
    return (
        <div>
            <Tooltip id="tooltip-icon" title="Helpful articles">
                <IconButton aria-label="Helpful articles">
                    <HelpIcon />
                </IconButton>
            </Tooltip>
        </div>
    );
}

SimpleTooltips.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTooltips);