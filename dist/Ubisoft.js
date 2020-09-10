"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/typeof"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var axios = require('axios');

var util = require('./util');

var default_locale = 'en-US';
var default_market = 'US';
var default_url = 'https://public-rest.a.upc.ubisoft.com';
var default_headers;

var Ubisoft = /*#__PURE__*/function () {
  function Ubisoft(appid) {
    var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : default_locale;
    var market = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : default_market;
    (0, _classCallCheck2["default"])(this, Ubisoft);
    this.appid = appid;
    this.locale = locale;
    this.market = market;
    this.token = '';
    default_headers = {
      'Ubi-AppId': this.appid,
      'Ubi-Locale': this.locale,
      'Ubi-Market': this.market
    };
    if (!this.appid) throw new Error('None or invalid appid provided in constructor');
  }
  /**
   * Creates a B64 encoded string of the username and password
   * to be used as auth
   * 
   * @param {String} username 
   * @param {String} password 
   */


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
    /**
     * Axios request wrapper function to do automatic sanitization
     * and stuff
     * 
     * This will also allow the usage of custom requests when using
     * the library
     * 
     * @param {String} url 
     * @param {String} path 
     * @param {Object} options 
     *  Axios options, defaults to a GEt request with default headers
     */

  }, {
    key: "request",
    value: function () {
      var _request = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(url, path) {
        var options,
            res,
            _args2 = arguments;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                options = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : {
                  method: 'GET',
                  headers: default_headers
                };
                path = util.ubiEncode(path);
                console.log(url + path);
                _context2.next = 5;
                return axios(url + path, options);

              case 5:
                res = _context2.sent;
                return _context2.abrupt("return", res);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function request(_x3, _x4) {
        return _request.apply(this, arguments);
      }

      return request;
    }()
    /**
     * Get icon
     * 
     * @param {String} profileId 
     */

  }, {
    key: "icon",
    value: function () {
      var _icon = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(profileId) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", 'https://ubisoft-avatars.akamaized.net/' + profileId + '/default_146_146.png');

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function icon(_x5) {
        return _icon.apply(this, arguments);
      }

      return icon;
    }() // async getMe() {
    //   let options = {
    //     method: 'GET',
    //     headers: default_headers
    //   }
    //   let path = '/v3/users/me'
    //   let res = await this.request(default_url, path, options)
    //   return res.data
    // }

    /**
     * Find players based on name and platform
     * 
     * @param {String} name 
     * @param {String} platform 
     */

  }, {
    key: "findPlayers",
    value: function () {
      var _findPlayers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(name) {
        var _this = this;

        var platforms, resps;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                platforms = ['xbl', 'psn', 'steam', 'uplay'];
                resps = [];
                _context5.next = 4;
                return (0, _forEach["default"])(platforms).call(platforms, /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(p) {
                    var path, res;
                    return _regenerator["default"].wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            path = '/v2/profiles?nameOnPlatform=' + name + '&platformType=' + p;
                            _context4.next = 3;
                            return _this.request(default_url, path);

                          case 3:
                            res = _context4.sent;
                            resps.push(res);

                          case 5:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4);
                  }));

                  return function (_x7) {
                    return _ref.apply(this, arguments);
                  };
                }());

              case 4:
                return _context5.abrupt("return", resps);

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function findPlayers(_x6) {
        return _findPlayers.apply(this, arguments);
      }

      return findPlayers;
    }()
    /**
     * Get featured news. This is usually what shows up when you open
     * the Uplay application for the first time
     */

  }, {
    key: "getFeaturedNews",
    value: function () {
      var _getFeaturedNews = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
        var options, path, res;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                // Axios options
                options = {
                  method: 'GET',
                  headers: default_headers
                }; // News path and params

                path = '/v1/news?filter=audience:normal,placement:_uplay_featured,type:featured|free|normal&sort=priority:asc,publicationDate:desc';
                _context6.next = 4;
                return this.request(default_url, path, options);

              case 4:
                res = _context6.sent;
                return _context6.abrupt("return", res.data);

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getFeaturedNews() {
        return _getFeaturedNews.apply(this, arguments);
      }

      return getFeaturedNews;
    }()
    /**
     * Get all of the other news articles that are usually shown
     * 
     * @param {Number} limit 
     */

  }, {
    key: "getNews",
    value: function () {
      var _getNews = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(start, limit) {
        var options, path, res;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                // Axios options
                options = {
                  method: 'GET',
                  headers: default_headers
                }; // News path and params

                path = '/v1/news?start=' + start + '&limit=' + limit + '&filter=audience:normal,placement:_uplay_news,type:featured|free|normal&sort=publicationDate:desc';
                _context7.next = 4;
                return this.request(default_url, path, options);

              case 4:
                res = _context7.sent;
                return _context7.abrupt("return", res.data);

              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getNews(_x8, _x9) {
        return _getNews.apply(this, arguments);
      }

      return getNews;
    }()
    /**
     * Get news article body via ID
     * 
     * @param {String|Object} data 
     */

  }, {
    key: "getNewsBody",
    value: function () {
      var _getNewsBody = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(data) {
        var id, options, path, res;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if ((0, _typeof2["default"])(data) == 'object') id = data.id;else id = data; // Axios options

                options = {
                  method: 'GET',
                  headers: default_headers
                }; // News path and params

                path = '/v1/news/' + id + '/body';
                _context8.next = 5;
                return this.request(default_url, path, options);

              case 5:
                res = _context8.sent;
                return _context8.abrupt("return", res.data);

              case 7:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getNewsBody(_x10) {
        return _getNewsBody.apply(this, arguments);
      }

      return getNewsBody;
    }()
  }]);
  return Ubisoft;
}();

module.exports = Ubisoft;