"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var axios = require('axios');

var util = require('./util');

var default_url = 'https://game-rainbow6.ubi.com';

var Rainbow = /*#__PURE__*/function () {
  function Rainbow(ubi, platform, id) {
    (0, _classCallCheck2["default"])(this, Rainbow);
    this.Ubisoft = ubi;
    this.platform = platform;
    this.id = id;
  }
  /**
   * Return seasons list
   */


  (0, _createClass2["default"])(Rainbow, [{
    key: "getSeasonsList",
    value: function () {
      var _getSeasonsList = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var path, res;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                path = '/assets/data/seasons.6aada152.json';
                _context.next = 3;
                return this.Ubisoft.request(default_url, path);

              case 3:
                res = _context.sent;
                return _context.abrupt("return", res.data);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getSeasonsList() {
        return _getSeasonsList.apply(this, arguments);
      }

      return getSeasonsList;
    }()
    /**
     * Return ranks list
     */

  }, {
    key: "getRanksList",
    value: function () {
      var _getRanksList = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var path, res;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                path = '/assets/data/ranks.f6cbd78b.json';
                _context2.next = 3;
                return this.Ubisoft.request(default_url, path);

              case 3:
                res = _context2.sent;
                return _context2.abrupt("return", res.data);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getRanksList() {
        return _getRanksList.apply(this, arguments);
      }

      return getRanksList;
    }()
    /**
     * Return operator list
     */

  }, {
    key: "getRanksList",
    value: function () {
      var _getRanksList2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var path, res;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                path = '/assets/data/operators.269788a7.json';
                _context3.next = 3;
                return this.Ubisoft.request(default_url, path);

              case 3:
                res = _context3.sent;
                return _context3.abrupt("return", res.data);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getRanksList() {
        return _getRanksList2.apply(this, arguments);
      }

      return getRanksList;
    }()
    /**
     * Return weapons list
     */

  }, {
    key: "getRanksList",
    value: function () {
      var _getRanksList3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        var path, res;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                path = '/assets/data/weapons.8a9b3d9e.json';
                _context4.next = 3;
                return this.Ubisoft.request(default_url, path);

              case 3:
                res = _context4.sent;
                return _context4.abrupt("return", res.data);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getRanksList() {
        return _getRanksList3.apply(this, arguments);
      }

      return getRanksList;
    }()
    /**
     * Get overall R6 stats
     */

  }, {
    key: "getStatistics",
    value: function () {
      var _getStatistics = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
        var path, res;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                path = '/' + this.Ubisoft.locale + '/' + this.platform + '/player-statistics/' + this.id + '/multiplayer'; // Request with default options

                _context5.next = 3;
                return this.Ubisoft.request(default_url, path);

              case 3:
                res = _context5.sent;
                return _context5.abrupt("return", res.data);

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getStatistics() {
        return _getStatistics.apply(this, arguments);
      }

      return getStatistics;
    }()
  }]);
  return Rainbow;
}();

module.exports = Rainbow;