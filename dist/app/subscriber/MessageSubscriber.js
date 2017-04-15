'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _stompit = require('stompit');

var _stompit2 = _interopRequireDefault(_stompit);

var _FileController = require('../controllers/FileController');

var _FileController2 = _interopRequireDefault(_FileController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MessageSubscriber = function () {
  function MessageSubscriber(config) {
    _classCallCheck(this, MessageSubscriber);

    this.config = config;
    var manager = new _stompit2.default.ConnectFailover([config.server], { maxReconnects: 10 });
    this.channelPool = new _stompit2.default.ChannelPool(manager);
  }

  _createClass(MessageSubscriber, [{
    key: 'subscribe',
    value: function subscribe(topic) {
      var _this = this;

      var mensageria = this;

      return new Promise(function (resolve, reject) {

        _this.channelPool.channel(function (errorChannel, channel) {
          if (errorChannel) {
            reject(errorChannel);
          }

          var topicConfig = _this.config.topics[topic];

          var cabecalho = {
            destination: topicConfig.name,
            'content-type': topicConfig.contentType
          };

          channel.subscribe(cabecalho, function (errorSubscribe, message) {
            if (errorSubscribe) {
              reject(errorSubscribe);
            }

            message.readString('utf8', function (errorRead, body) {
              if (errorRead) {
                reject(errorRead);
              }

              var json = JSON.parse(body);

              var controller = new _FileController2.default();
              controller.writeDown(json.steamUserId);
            });
          });
        });
      });
    }
  }]);

  return MessageSubscriber;
}();

exports.default = MessageSubscriber;
module.exports = exports['default'];