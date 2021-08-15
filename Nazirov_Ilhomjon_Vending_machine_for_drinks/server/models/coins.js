import mongoose from 'mongoose';

// Schema of saving information about machine coins
const coinsSchema = mongoose.Schema({
    amount: Number,
    coin: Number,
    blocked: Boolean
})

var Coins = mongoose.model('Coins', coinsSchema);

export default Coins;