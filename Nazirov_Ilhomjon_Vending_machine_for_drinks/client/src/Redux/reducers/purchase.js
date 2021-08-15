import {FETCH_COINS, GIVE_REMINDER, TOP_UP, UPDATE_COINS, WITHDRAWAL} from "../constants/actionTypes";

// Coins reducer
export default (state = {userCoins: 0, coins: [], isChange: false}, action) => {
    switch (action.type) {
        case FETCH_COINS:
            return {
                ...state,
                coins: action.payload.data,
            };
        case UPDATE_COINS:
            return {...state, coins: action.payload.data}
        case TOP_UP:
            return {...state, userCoins: state.userCoins + action.payload.coins};
        case WITHDRAWAL:
            return {...state, userCoins: state.userCoins - action.payload.coins};
        case GIVE_REMINDER:
            return {...state, isChange: action.payload.data};
        default:
            return state;
    }
};
