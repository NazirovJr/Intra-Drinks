import React from 'react';
import { Container } from '@material-ui/core';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

// Functional  Component which controlling the web-site
const App = () => {
    return (
        <BrowserRouter>
            <Container maxWidth="xl">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={() => <Redirect to="/posts" />} />
                    <Route path="/posts" exact component={Home} />
                    <Route path={`/posts/${process.env.REACT_APP_SECRET_KEY}`} exact component={Home} />
                    <Route path="/posts/search" exact component={Home} />
                </Switch>
            </Container>
        </BrowserRouter>
    );
}

export default App;
