// EXTERNAL DEPENDENCIES
import React from 'react';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Input from 'material-ui/Input';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';

// INTERNAL DEPENDENCIES
import Header from './PostFormHeader';
import {
    formSubmit,
    postCommentUpdate,
    postTitleUpdate
} from '../state/reducer';

// LOCAL VARIABLES
const styles = {
    card: {
        marginTop: 100,
        marginLeft: 'auto',
        marginRight: 'auto',
        minWidth: 275,
        width: '85%'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14
    },
    pos: {
        marginBottom: 12,
    },
};

// COMPONENT DEFINITION
function SimpleCard(props) {
    const { classes } = props;
    // console.log(props.onPostTitleUpdate);
    return (
        <div>
            <Card className={classes.card}>
                <Header />
                <CardContent>
                    <Typography className={classes.title} color="textSecondary">
                        Add Post
                    </Typography>
                    <Input
                        fullWidth
                        placeholder="Title"
                        className={classes.input}
                        onChange={(e) => {
                            props.onPostTitleUpdate(e.target.value)
                            console.log(e.target.value)
                        }}
                        inputProps={{
                            'aria-label': 'Description',
                        }}
                    />
                    <br />
                    <TextField
                        id="multiline-flexible"
                        label="Post"
                        fullWidth
                        multiline
                        rowsMax="4"
                        className={classes.textField}
                        margin="normal"
                        onChange={(e) => {
                            props.onPostCommentUpdate(e.target.value)
                            console.log(e.target.value)
                        }}
                    />
                </CardContent>
                <CardActions>
                    <Button
                        size="small"
                        onClick={props.onFormSubmit}>Submit
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
    onPostCommentUpdate: PropTypes.func.isRequired,
    onPostTitleUpdate: PropTypes.func.isRequired,
};

// Below, we are mapping state to props and dispatching
// Same layout as with mapStateToProps:
//   export default connect (state, { dispatched action })(Component)
// set onPostTitleUpdate to postTitleUpdate for clarity in code

export default connect(state => { }, {
    onFormSubmit: formSubmit,
    onPostCommentUpdate: postCommentUpdate,
    onPostTitleUpdate: postTitleUpdate
})(withStyles(styles)(SimpleCard));