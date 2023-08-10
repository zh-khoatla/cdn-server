import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const startMiddleware = (app) => {
  app.use(express.json());
  app.use(morgan('combined'));
  app.use(cors());
};

export default startMiddleware;
