'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MessageSubscriber = require('./MessageSubscriber');

var _MessageSubscriber2 = _interopRequireDefault(_MessageSubscriber);

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _MessageSubscriber2.default(_config2.default.mq);
module.exports = exports['default'];