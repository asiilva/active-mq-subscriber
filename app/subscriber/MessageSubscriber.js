import stompit from 'stompit';
import FileController from '../controllers/FileController';

export default class MessageSubscriber {
  constructor(config) {
    this.config = config;
    const manager = new stompit.ConnectFailover([config.server], { maxReconnects: 10 });
    this.channelPool = new stompit.ChannelPool(manager);
  }

  subscribe(topic) {
    const mensageria = this;

    return new Promise((resolve, reject) => {

      this.channelPool.channel((errorChannel, channel) => {
        if (errorChannel) {
          reject(errorChannel);
        }

        const topicConfig = this.config.topics[topic];

        const cabecalho = {
          destination: topicConfig.name,
          'content-type': topicConfig.contentType
        };

        channel.subscribe(cabecalho, (errorSubscribe, message) => {
          if (errorSubscribe) {
            reject(errorSubscribe);
          }

          message.readString('utf8', (errorRead, body) => {
            if (errorRead) {
              reject(errorRead);
            }

            const json = JSON.parse(body);

            const controller = new FileController();
            controller.writeDown(json.steamUserId);
          });

        });
      });
    });
  }
}
