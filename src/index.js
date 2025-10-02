//import 'dotenv/config';
//or if we want more control
import dotenv from 'dotenv';
import path from 'path';

import connectDB from "./db/connectDB.js";
import { app } from "./app.js";


dotenv.config(
    {
        path: path.resolve(process.cwd(), '.env')
    }
);  // Load from specific path

const port = process.env.port || 3000;

connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server running at port: ${port}`);
        })
    })
    .catch((error) => {
        console.log("MongoDB connection failed!! ", error);
    });