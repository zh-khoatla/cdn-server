import express from 'express';
import startMiddleware from './start/middleware';
import startRouter from './start/router';
import dotenv from 'dotenv';
import logger from './log';

// Environment variables for development
dotenv.config({ path: './src/api/v1/configs/.env' });

// Init Variables
const app = express();
const port = process.env.PORT || 5000;

// Middlewares
startMiddleware(app);

// Routes
startRouter(app);

app.listen(port, () => {
  logger.log(`Example app listening at http://localhost:${port}`);
});
