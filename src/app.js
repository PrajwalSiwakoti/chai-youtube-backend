import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));


app.use(express.json({limit: "16kb"})); // to handle JSON payloads
app.use(express.urlencoded({
    extended: true,
    limit: true
})); // to handle URL encoded payloads, form data
app.use(express.static("public"));// to serve static files
app.use(cookieParser());// to parse cookies

export { app }