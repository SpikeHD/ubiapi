"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _require = require("@babel/runtime-corejs3/regenerator"),
    mark = _require.mark;

var default_locale = 'en-US';
var default_market = 'US';

var Ubisoft = /*#__PURE__*/function () {
  function Ubisoft(appid) {
    var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : default_locale;
    var market = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : default_market;
    (0, _classCallCheck2["default"])(this, Ubisoft);
    this.appid = appid;
    this.locale = locale;
    this.market = market;
    this.token = '';
    if (!this.appid) throw new Error('None or invalid appid provided in constructor');
  }

  (0, _createClass2["default"])(Ubisoft, [{
    key: "createToken",
    value: function () {
      var _createToken = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(username, password) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", this.token = Buffer.from(username + ':' + password).toString('base64'));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function createToken(_x, _x2) {
        return _createToken.apply(this, arguments);
      }

      return createToken;
    }()
  }]);
  return Ubisoft;
}();

module.exports = Ubisoft;