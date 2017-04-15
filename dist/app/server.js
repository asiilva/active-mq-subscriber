'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _subscriber = require('./subscriber');

var _subscriber2 = _interopRequireDefault(_subscriber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Server = function () {
  function Server(config) {
    _classCallCheck(this, Server);

    this.config = config;
  }

  _createClass(Server, [{
    key: 'start',
    value: function start() {
      return new Promise(function (resolve, reject) {
        _subscriber2.default.subscribe('newUser');
      });
    }
  }, {
    key: 'stop',
    value: function stop() {
      this.app.server.close();
    }
  }]);

  return Server;
}();

exports.default = Server;
module.exports = exports['default'];