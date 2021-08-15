import express from 'express';

import {getCoins, updateCoins} from "../controllers/coins.js";

const router = express.Router();

// get request for getting information about coins
router.get('/', getCoins);

// updating information about coins request
router.patch('/', updateCoins);

export default router;