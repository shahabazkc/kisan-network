import express from 'express';
import 'express-async-errors';
import dotenv from 'dotenv';
dotenv.config();
import cors, { CorsOptions } from 'cors';
import cookieSession from 'cookie-session';


const app = express();

// Cors Options
const corsOptions: CorsOptions = {
    origin: ['*', 'http://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
};

// Express json middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use Cors
app.use(cors(corsOptions));

// Cookie Session
app.use(
    cookieSession({
        signed: false,
        secure: false,
    })
);

// Routes

// If Routes not found
app.all('*', (req, res) => {
    res.status(404).json({
        message: 'Not Found'
    });
});

// Export app
export default app;