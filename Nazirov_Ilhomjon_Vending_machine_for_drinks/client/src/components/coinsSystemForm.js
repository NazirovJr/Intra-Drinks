import React, {useEffect, useState} from 'react';
import {AppBar, Button, Switch, Divider, CardActions, TextField} from '@material-ui/core';

import useStyles from './styles';
import {useDispatch, useSelector} from "react-redux";
import {updateCoins} from "../Redux/actions/purchase";

// Functional Component which rendering form for controlling the machine coins
const CoinsSystemForm = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const initializeState = useSelector((state) => state.purchase.coins) // getting information about machine coins
    const [coins, setCoins] = useState(initializeState)

    useEffect(() => {
        setCoins(initializeState)
    },[initializeState])

    const handleAmountChange = (event, index) => {
        setCoins((prev) => prev.map((el, i) => {
            if (index === i) el.amount = event.target.value
            return el
        }))
    }

    // Toggle blocked status of coins
    const handleBlockChange = (event, index) => {
        setCoins((prev) => prev.map((el, i) => {
            if (index === i) el.blocked = event.target.checked
            return el
        }))
    };

    // dispatching action for changing machine coins data
    const handleSubmit = () => {
        dispatch(updateCoins(coins))
    }

    return (
        <AppBar className={classes.appBarSearch} position="static" color="inherit">
            {
                coins?.map((item, index) => {
                    return (<>
                            <CardActions className={classes.coinsCard}>
                                <img className={classes.coinsIcon} src={item.image} alt={item.price}/>
                                <TextField name="amount" variant="outlined" label="amount" fullWidth
                                           onChange={(event) => handleAmountChange(event, index)} value={item.amount}/>
                                <Switch
                                    checked={item.blocked}
                                    onChange={(event) => handleBlockChange(event, index)}
                                    name="blocked"
                                    inputProps={{'aria-label': 'secondary checkbox'}}
                                />
                            </CardActions>
                            <Divider style={{margin: '20px 0'}}/>
                        </>
                    )
                })
            }
            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
            >Save
            </Button>
        </AppBar>
    );
};

export default CoinsSystemForm;
