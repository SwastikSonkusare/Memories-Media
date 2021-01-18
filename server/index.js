import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors';

import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.use('/posts', postRoutes)
app.use('/user', userRoutes)

app.get('/', (req,res) =>{
    res.send('Welcome to App!')
})

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
    .then(() => app.listen(PORT, (req, res) => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));




