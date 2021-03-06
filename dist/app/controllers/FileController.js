'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = require('../util/logger');

var _logger2 = _interopRequireDefault(_logger);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FileController = function () {
  function FileController() {
    _classCallCheck(this, FileController);
  }

  _createClass(FileController, [{
    key: 'writeDown',
    value: function writeDown(steamUserId) {
      return new Promise(function (resolve, reject) {
        _fs2.default.appendFile('/tmp/whitelist.cfg', steamUserId + '\r\n', function (err) {
          if (err) return console.log(err);
          return console.log('The steam user id has been succesfully written.');
        });
      });
    }
  }]);

  return FileController;
}();

exports.default = FileController;
module.exports = exports['default'];