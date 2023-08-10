import devLogger from './development';
import prodLogger from './production';
import NodeEnv from '../constants/node_env';

const logger =
  process.env.NODE_ENV === NodeEnv.development ? devLogger : prodLogger;

export default logger;
