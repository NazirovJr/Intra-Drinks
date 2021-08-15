import React, {useEffect, useState} from 'react';
import {Container, Grow, Grid, AppBar, TextField, Button, Paper, Divider} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {useHistory, useLocation} from 'react-router-dom';

import {getPostsBySearch} from '../../Redux/actions/posts';
import Posts from '../Posts/Posts';
import Pagination from '../Pagination';
import useStyles from './styles';
import PayFrom from '../payFrom';
import Modal from "../Modal/Modal";
import Form from "../Form/Form";
import CoinsSystemForm from "../coinsSystemForm";
import {getCoins} from "../../Redux/actions/purchase";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

// Functional Component which rendering the body of web-site
const Home = () => {
    const classes = useStyles();
    const query = useQuery();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    const dispatch = useDispatch();
    const [search, setSearch] = useState(''); // searching value
    const [currentId, setCurrentId] = useState(0); // post id
    const history = useHistory(); // For changing the address of url
    const [isOpen, setIsOpen] = useState(false)  // Controlling modal appearance
    const [modalData, setModalData] = useState({title: '', message: ''}); // Modal data
    const isAdmin = useLocation().pathname.split('/').includes(process.env.REACT_APP_SECRET_KEY); // checking admin status

    // Function for searching the post
    const searchPost = () => {
        if (search.trim()) {
            dispatch(getPostsBySearch({search}));
            history.push(`/posts/search?searchQuery=${search || 'none'}`);
        } else {
            history.push('/');
        }
    };

   // getting information about machines coins
    useEffect(() => {
        dispatch(getCoins());
    }, [])

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            searchPost();
        }
    };


    return (
        <Grow in>
            <Container maxWidth="xl">
                <Grid container justify="space-between" alignItems="stretch" spacing={3}
                      className={classes.gridContainer}>
                    <Grid item xs={12} sm={6} md={9}>
                        {isOpen ? <Modal title={modalData.title} message={modalData.message} setIsOpen={setIsOpen}/> :
                            <Posts setCurrentId={setCurrentId}/>}
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppBar className={classes.appBarSearch} position="static" color="inherit">
                            <TextField
                                onKeyDown={handleKeyPress}
                                name="search"
                                variant="outlined"
                                label="Search Drinks"
                                fullWidth
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <Divider style={{margin: '20px 0'}}/>
                            <Button
                                onClick={searchPost}
                                className={classes.searchButton}
                                variant="contained"
                                color="primary"
                            >Search
                            </Button>
                        </AppBar>
                        {isAdmin ? (<><CoinsSystemForm />
                        <Form currentId={currentId} setCurrentId={setCurrentId} /></>) : <PayFrom setIsOpen={setIsOpen} setModalData={setModalData}/>}
                        {(!searchQuery) && (
                            <Paper className={classes.pagination} elevation={6}>
                                <Pagination page={page}/>
                            </Paper>
                        )}
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default Home;
