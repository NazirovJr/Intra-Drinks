import React, {useState, useEffect} from 'react';
import {TextField, Button, Typography, Paper} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import FileBase from 'react-file-base64';

import {createPost, updatePost} from '../../Redux/actions/posts';
import useStyles from './styles';

//Functional Component which rendering the form for updating and creating posts
const Form = ({currentId, setCurrentId}) => {
    const initialState = {title: '', price: null, amount: null, selectedFile: ''};
    const [postData, setPostData] = useState(initialState);
    const post = useSelector((state) => (currentId ? state.posts.posts.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();
    const classes = useStyles();

    // For cleaning form from data
    const clear = () => {
        setCurrentId(0);
        setPostData(initialState);
    };

    useEffect(() => {
        if (!post?.title) clear();
        if (post) setPostData(post);
    }, [post]);

    // Sending request for updating or creating post
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentId === 0) {
            dispatch(createPost({...postData}));
            clear();
        } else {
            dispatch(updatePost(currentId, {...postData}));
            clear();
        }
    };

    return (
        <Paper className={classes.paper} elevation={6}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? `Editing "${post?.title}"` : 'Add a Drink'}</Typography>
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title}
                           onChange={(e) => setPostData({...postData, title: e.target.value})}/>
                <TextField name="amount" variant="outlined" type="number" label="Amount" fullWidth
                           value={postData.amount}
                           onChange={(e) => setPostData({...postData, amount: e.target.value})}/>
                <TextField name="price" variant="outlined" type="number" label="Price" fullWidth
                           value={postData.price}
                           onChange={(e) => setPostData({...postData, price: e.target.value})}/>
                <div className={classes.fileInput}><FileBase type="file" multiple={false}
                                                             onDone={({base64}) => setPostData({
                                                                 ...postData,
                                                                 selectedFile: base64
                                                             })}/></div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit"
                        fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
};

export default Form;
