import React, {useState} from 'react';
import {Grid, CircularProgress} from '@material-ui/core';
import {useSelector} from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';
import Modal from "../Modal/Modal";

//Functional Component which rendering the posts
const Posts = ({setCurrentId}) => {
    const {posts, isLoading} = useSelector((state) => state.posts); // getting posts from store
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false); // Modal toggling
    const [modalData, setModalData] = useState({title: '', message: ''}); // modal data

    if (!posts.length && !isLoading) return 'No posts';

    return (
        isLoading ? <CircularProgress/> : (
            <>
                {isOpen ? (<Modal title={modalData.title} message={modalData.message} setIsOpen={setIsOpen}/>) :
                    (<Grid className={classes.container} container alignItems="stretch" spacing={3}>
                        {posts?.map((post) => (
                            <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
                                <Post post={post} setCurrentId={setCurrentId} setIsOpen={setIsOpen}
                                      setModalData={setModalData}/>
                            </Grid>
                        ))}
                    </Grid>)
                }
            </>
        )
    );
};

export default Posts;
