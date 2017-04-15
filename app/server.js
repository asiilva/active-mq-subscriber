import subscriber from './subscriber';

export default class Server {
  constructor(config) {
    this.config = config;
  }

  start() {
    return new Promise((resolve, reject) => {
      subscriber.subscribe('newUser');
    });
  }

  stop() {
    this.app.server.close();
  }
}
