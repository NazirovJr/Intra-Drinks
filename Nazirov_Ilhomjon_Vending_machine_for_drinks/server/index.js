import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
import coinsRoutes from './routes/coins.js';

const app = express();
dotenv.config();

// Creating basic configuration for server
app.use(express.json({limit: '30mb', extended: true}))
app.use(express.urlencoded({limit: '30mb', extended: true}))
app.use(cors());

// Putting static routes
app.use('/posts', postRoutes);
app.use('/coins', coinsRoutes);

// Port data
const PORT = process.env.PORT || 5000;

// Connection with database
mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);