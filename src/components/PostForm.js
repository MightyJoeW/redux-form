import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import PostTitle from './PostTitle';
import PostPost from './PostPost';
import { addPost } from '../state/reducer';

const styles = {
    card: {
        minWidth: 275
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

function SimpleCard(props) {
    const { classes } = props;
    // console.log(props.onAddPost)
    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary">
                        Add Post
                    </Typography>
                    <PostTitle onChange={(e) => {
                        // console.log(e.target.value);
                        props.onAddPost(e.target.value);
                    }} />
                    <PostPost />
                </CardContent>
                <CardActions>
                    <Button size="small">Submit</Button>
                </CardActions>
            </Card>
        </div>
    );
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
    onAddPost: PropTypes.func.isRequired,
};

// Below, we are mapping state to props and dispatching
// connect state
// set onAddPost to addPost for clarity in code
// use material-ui currying

export default connect(state => { console.log(state) },
    { onAddPost: addPost })(withStyles(styles)(SimpleCard));