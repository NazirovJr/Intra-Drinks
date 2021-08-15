import React from 'react';
import {Card, CardActions, CardMedia, Typography, ButtonBase, Button} from '@material-ui/core/';
import moment from 'moment';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import AttachMoneySharpIcon from '@material-ui/icons/AttachMoneySharp';
import {Icon} from '@iconify/react';

import useStyles from './styles';
import {useDispatch, useSelector} from "react-redux";
import {GIVE_REMINDER, WITHDRAWAL} from "../../../Redux/constants/actionTypes";
import {deletePost, updatePost} from "../../../Redux/actions/posts";
import {useLocation} from "react-router-dom";

//Functional Component which rendering  post
const Post = ({post, setIsOpen, setModalData, setCurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const userCoins = useSelector((state) => state.purchase.userCoins);// getting user coins from store
    const isAdmin = useLocation().pathname.split('/').includes(process.env.REACT_APP_SECRET_KEY); // checking status of admin

    // Function for buying a drink
    const buyDrink = () => {
        if (userCoins >= post.price && post.amount) {
            post.amount -= 1;
            if (userCoins !== post.price) dispatch({type: GIVE_REMINDER, payload: {data: true}});
            else dispatch({type: GIVE_REMINDER, payload: {data: false}});
            dispatch({type: WITHDRAWAL, payload: {coins: post.price}});
            dispatch(updatePost(post._id, post));
            setModalData({title: 'Success', message: `You successfully buy a ${post.title}`})
        } else if (!post.amount) setModalData({
            title: 'Sorry',
            message: `We have not ${post.title} now, but as soon as possible we will solve this problem!`
        });
        else setModalData({title: 'Error', message: `In your account not enough money for buying ${post.title}`});
        setIsOpen(true);
    };

    return (
        <Card className={classes.card} raised elevation={6}>
            <ButtonBase
                component="span"
                name="test"
                className={classes.cardAction}
                onClick={() => !isAdmin ? buyDrink():null}
            >
                <CardMedia className={classes.media}
                           image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}
                           title={post.title}/>
                <div className={classes.overlay}>
                    <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
                </div>
                {isAdmin && (<div className={classes.overlay2} name="edit">
                    <Button
                        onClick={(e) => {
                            e.stopPropagation();
                            setCurrentId(post._id);
                        }}
                        style={{color: 'white'}}
                        size="small"
                    >
                        <MoreHorizIcon fontSize="default"/>
                    </Button>
                </div>)}
                <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
                <CardActions>
                    <Typography className={classes.title} gutterBottom variant="h6" component="h6">Price
                        : {post.price}</Typography>
                    <AttachMoneySharpIcon className={classes.AvatarOfDollar}/>
                </CardActions>
                <CardActions className={classes.cardIcon}>
                    <CardActions>
                        <Icon style={{width: '20px', height: '20px', marginRight: '10px'}} icon="fa-solid:wine-bottle"
                              rotate={3}/> {post.amount}
                    </CardActions>
                    {isAdmin && (<Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
                        <DeleteIcon fontSize="small"/> &nbsp; Delete
                    </Button>)}
                </CardActions>
            </ButtonBase>
        </Card>
    );
};

export default Post;
