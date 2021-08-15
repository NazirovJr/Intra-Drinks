import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import {AppBar, Button, ButtonBase, Divider} from '@material-ui/core';
import ChipInput from 'material-ui-chip-input';

import useStyles from './styles';
import {useDispatch, useSelector} from "react-redux";
import {GIVE_REMINDER, TOP_UP, WITHDRAWAL} from "../Redux/constants/actionTypes";
import {getCoins, updateCoins} from "../Redux/actions/purchase";
import {remainderSystem} from "./Home/remainderSystem";

// Functional Component for rendering form for top up cains
const PayFrom = ({setIsOpen, setModalData}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [coins, setCoins] = useState([]); // user coins
    const {coins: coinsData, userCoins, isChange} = useSelector((state) => state.purchase); // machine coins


    // Adding coins
    const handleAddChip = (coin) => {
        setCoins([...coins, coin]);
    };

    // Dispatching action for changing information about money of user
    const topUpMoney = () => {
        const updateData = coinsData.map((item) => {
            item.amount += coins.reduce((sum, el) => el === item.price ? sum + 1 : sum, 0);
            return item
        });
        const sumCoins = coins.reduce((sum, el) => sum + el, 0);
        dispatch(updateCoins(updateData));
        dispatch({type: TOP_UP, payload: {coins: sumCoins}});
        setCoins([]);
    }

    // Function for getting reminder after  shopping
    const giveReminder = () => {
        const data = remainderSystem(userCoins, coinsData);
        if (data.coins) {
            dispatch(updateCoins(data.coins));
            dispatch({type: WITHDRAWAL, payload: {coins: userCoins}});
            dispatch({type: GIVE_REMINDER, payload: {data: false}});
        }
        setModalData(data.modal);
        setIsOpen(true);
    }

    return (
        <AppBar className={classes.appBarSearch} position="static" color="inherit">
            <div style={{padding: '5px 0', width: '94%'}}>
                <ChipInput
                    name="Coins"
                    variant="outlined"
                    label="Input Coins"
                    fullWidth
                    value={coins}
                />
            </div>
            <Divider style={{margin: '20px 0'}}/>
            <Carousel>
                {
                    coinsData.map((item) => {
                        return <ButtonBase
                            component="span"
                            name="test"
                            className={classes.cardAction}
                            disabled={item.blocked}
                            onClick={() => handleAddChip(item.price)}
                        >
                            <img className={`${classes.coinsImage}  ${item.blocked ? classes.strikeDiag : null}`}
                                 src={item.image} alt={item.price}/>
                        </ButtonBase>
                    })
                }
            </Carousel>
            <Divider style={{margin: '20px 0'}}/>
            <Button
                onClick={topUpMoney}
                variant="contained"
                color="primary"
            >Top Up
            </Button>
            {isChange && (<><br/><Button
                onClick={giveReminder}
                variant="contained"
                color="primary"
            >Get Change
            </Button></>)}
        </AppBar>
    );
};

export default PayFrom;
