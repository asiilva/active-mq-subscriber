import MessageSubscriber from './MessageSubscriber';
import config from '../../config';

export default new MessageSubscriber(config.mq);
