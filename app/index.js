import config from '../config';
import Server from './Server';
import logger from './util/logger';

const server = new Server(config);

server.start();
logger.info(`The service has been started.`);
