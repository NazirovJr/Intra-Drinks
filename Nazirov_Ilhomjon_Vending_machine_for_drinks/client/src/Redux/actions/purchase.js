import {END_LOADING, FETCH_COINS, START_LOADING, UPDATE_COINS} from "../constants/actionTypes";
import * as api from "../../api";

//Function for getting information about machine coins
export const getCoins = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchCoins();

        dispatch({ type: FETCH_COINS, payload: { data: data.data } });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
};

// Function for updating machine coins
export const updateCoins = (post) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.updateCoins(post);
        dispatch({ type: UPDATE_COINS, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
};