import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Input from 'material-ui/Input';
import TextField from 'material-ui/TextField';

import Header from './PostFormHeader';
import {
    postCommentUpdate,
    postTitleUpdate
} from '../state/reducer';

const styles = {
    card: {
        marginTop: 100,
        marginLeft: 'auto',
        marginRight: 'auto',
        minWidth: 275,
        width: '75%'
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

function SimpleCard(props) {
    const { classes } = props;
    const SubmitButton = props.postTitle === ''
        ? <Button size="small" disabled>Submit</Button>
        : <Button size="small">Submit</Button>
    // console.log(props.onPostTitleUpdate)
    return (
        <div>
            <Card className={classes.card}>
            <Header />
                <CardContent>
                    <Typography className={classes.title} color="textSecondary">
                        Add Post
                    </Typography>
                    <Input
                        onChange={(e) => {
                            props.onPostTitleUpdate(e.target.value)
                            console.log(e.target.value)
                        }}
                        placeholder="Title"
                        className={classes.input}
                        inputProps={{
                            'aria-label': 'Description',
                        }}
                    />
                    <br />
                    <TextField
                        onChange={(e) => {
                            props.onPostCommentUpdate(e.target.value)
                            console.log(e.target.value)
                        }}
                        id="multiline-flexible"
                        label="Post"
                        multiline
                        rowsMax="4"
                        className={classes.textField}
                        margin="normal"
                    />
                </CardContent>
                <CardActions>
                    {SubmitButton}
                </CardActions>
            </Card>
        </div>
    );
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
    onPostCommentUpdate: PropTypes.func.isRequired,
    onPostTitleUpdate: PropTypes.func.isRequired,
};

// Below, we are mapping state to props and dispatching
// Same layout as with mapStateToProps:
//   export default connect (state, { dispatched action })(Component)
// set onPostTitleUpdate to postTitleUpdate for clarity in code

export default connect(state => { }, {
    onPostCommentUpdate: postCommentUpdate,
    onPostTitleUpdate: postTitleUpdate
})(withStyles(styles)(SimpleCard));