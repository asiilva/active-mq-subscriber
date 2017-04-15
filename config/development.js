import winston from 'winston';

export default {
  mq: {
    server: {
      host: '127.0.0.1',
      port: 61613
    },
    topics: {
      newUser: {
        name: '/topic/usuario-steam',
        contentType: 'application/json'
      }
    }
  },
  log: {
    transports: [
      new (winston.transports.Console)({
        timestamp: () => (new Date()).toLocaleTimeString(),
        colorize: true
      })
    ]
  }
};
