import express from "express";
import data from "./data.js";
import mongoose from "mongoose";
import useRouter from "./routers/userRouter.js";
import dotenv from 'dotenv';
import productRouter from "./routers/productRouter.js";
import orderRouter from './routers/orderRouter.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

try {
  mongoose.connect(process.env.MONGOURL, () =>
  console.log('Connected to DB')
);
} catch (error) {
  console.log(error);
};

app.use('/api/users', useRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.get('/', (req, res) =>{
    res.send('Server is ready');
});

app.use((err, req, res, next) =>{
    res.status(500).send({message: err.message});
});

const port = process.env.PORT || 5000;
app.listen(port, () =>{
    console.log(`Server at http://localhost:${port}`)
});