import express from 'express';
import Coins from "../models/coins.js";

const router = express.Router();

// Getting information about machine coins from database
export const getCoins = async (req, res) => {
    try {
        const coins = await Coins.find();
        res.json({ data: coins});
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}


// Updating information from database about machine coins
export const updateCoins = async (req, res) => {
    try {
        const updatedCoins = req.body;
        updatedCoins.forEach(async (el) => {await Coins.findByIdAndUpdate(el._id, el, {new: true})});
        res.json({data: updatedCoins})
    } catch (e) {
        res.status(404).json({message: error.message});
    }
}


export default router;