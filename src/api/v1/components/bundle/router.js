import express from 'express';
import getBundle from './controller/getBundle';

const bundleRouter = express.Router();

//======================== GET ========================
bundleRouter.get('/download/:version/:bundleName', getBundle);
//======================== POST ========================
//======================== PUT ========================
//======================== DELETE ========================

export default bundleRouter;
