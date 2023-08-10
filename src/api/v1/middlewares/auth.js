import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  const token = req.headers?.authorization?.split(' ')[1];
  try {
    const decodedObject = jwt.decode(token, process.env.JWT_SECRET);
    const decodedData = decodedObject.data;
    req.user = decodedData;
    return next();
  } catch (error) {
    const err = new Error('Access denied!');
    err.status = 401;
    return next(err);
  }
};

export default authMiddleware;
