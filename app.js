import express from 'express';
import dotenv from 'dotenv';

import path from 'path';
import connectToDatabase from './config/mongoDb.connection.js';
import ownersRouter from './routes/ownersRouter.js'
import usersRouter from './routes/usersRouter.js'
import productRouter from './routes/productsRouter.js'

dotenv.config();
connectToDatabase(); 

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");


app.use(express.static(path.join(process.cwd(), "public")));

app.use("/owners",ownersRouter);
app.use("/users",usersRouter);
app.use("/product",productRouter);

app.get("/", (req, res) => {
    res.send("Welcome to the Home Page!");
});


// Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
