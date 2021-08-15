
export const remainderSystem = (userCoins, coins) => {
    if (userCoins)
    {
        let cash = 0, i = coins.length - 1, changeCoins = [];
        while (cash !== userCoins && (i + 1)) {
            if (cash + coins[i].price <= userCoins && coins[i].amount)
            {
                cash += coins[i].price;
                coins[i].amount--;
                changeCoins.push(coins[i].price);
            } else i--;
        }
        if (cash === userCoins) return {coins, modal:{title:'Success', message:`Your remainder: ${changeCoins.join('$ ')}$`}};
        else return {coins: null, modal: {title:'Sorry', message: 'Machines has not remainder for you. Can you buy in your remainder drinks.'}}
    } else {
        return {coins: null, modal: {title:'Error', message: 'You have not money in your account'}}
    }
}