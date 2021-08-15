import React from 'react';
import {AppBar, Toolbar} from '@material-ui/core';
import {Link, useLocation} from 'react-router-dom';
import memoriesLogo from '../../images/memoriesLogo.png';
import memoriesText from '../../images/memoriesText.png';
import useStyles from './styles';
import { useSelector} from "react-redux";
import AttachMoneySharpIcon from '@material-ui/icons/AttachMoneySharp';

// Functional Component which render the Navbar
const Navbar = () => {
    const classes = useStyles();
    const coins = useSelector((state) => state.purchase.userCoins); // information about machine coins
    const isAdmin = useLocation().pathname.split('/').includes(process.env.REACT_APP_SECRET_KEY); // checking the admin status

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Link to="/" className={classes.brandContainer}>
                <img component={Link} to="/" src={memoriesText} alt="icon" height="45px" style={{marginTop:'20px'}}/>
                <img className={classes.image} src={memoriesLogo} alt="icon" height="40px"/>
            </Link>
            {!isAdmin && (<Toolbar className={classes.toolbar}>
                On your account: {coins}
                <AttachMoneySharpIcon className={classes.AvatarOfDollar}/>
            </Toolbar>)}
        </AppBar>
    );
};

export default Navbar;
