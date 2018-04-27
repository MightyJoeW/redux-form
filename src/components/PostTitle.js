import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    input: {
        margin: theme.spacing.unit,
    },
});

function Inputs(props) {
    const {
        classes,
        ...other
    } = props;
    return (
        <div className={classes.container}>
            <Input
                placeholder="Title"
                className={classes.input}
                inputProps={{
                    'aria-label': 'Description',
                }}
                { ...other }
                //let's this mui component know that it has a prop (onChange) on another component
                //see https://material-ui-next.com/api/input/#__next for all props Input can have
            />
        </div>
    );
}

Inputs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Inputs);