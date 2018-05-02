import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import PostTitle from './PostTitle';
import PostPost from './PostPost';
import { postAdd } from '../state/reducer';

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

function SimpleCard(props) {
    const { classes } = props;
    // console.log(props.onpostAdd)
    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary">
                        Add Post
                    </Typography>
                    <PostTitle />
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
    onpostAdd: PropTypes.func.isRequired,
};

// Below, we are mapping state to props and dispatching
// Same layout as with mapStateToProps:
//   export default connect (state, { dispatched action })(Component)
// set onpostAdd to postAdd for clarity in code

export default connect(state => { }, { onpostAdd: postAdd })(withStyles(styles)(SimpleCard));