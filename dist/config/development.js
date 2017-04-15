'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
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
    transports: [new _winston2.default.transports.Console({
      timestamp: function timestamp() {
        return new Date().toLocaleTimeString();
      },
      colorize: true
    })]
  }
};
module.exports = exports['default'];