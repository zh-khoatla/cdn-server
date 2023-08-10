import mongoose from 'mongoose';
import logger from '../../log';

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    logger.log(`Successfully connected to MongoDB`);
  } catch (error) {
    logger.log('Error with MongoDB connection: ', error.message);
  }
};

export default connectMongoDB;
