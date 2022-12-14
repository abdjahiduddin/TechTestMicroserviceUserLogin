"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _users = _interopRequireDefault(require("../models/users"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
var _config = _interopRequireDefault(require("../config/config"));
var login = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var email, password, user, error, isEqual, _error, token;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            email = req.body.email;
            password = req.body.password;
            _context.next = 5;
            return _users["default"].findOne({
              email: email
            });
          case 5:
            user = _context.sent;
            if (user) {
              _context.next = 10;
              break;
            }
            error = new Error("Cannot found your email");
            error.statusCode = 401;
            throw error;
          case 10:
            _context.next = 12;
            return _bcryptjs["default"].compare(password, user.password);
          case 12:
            isEqual = _context.sent;
            if (isEqual) {
              _context.next = 17;
              break;
            }
            _error = new Error("Invalid password");
            _error.statusCode = 401;
            throw _error;
          case 17:
            token = _jsonwebtoken["default"].sign({
              email: user.email,
              userId: user._id.toString()
            }, _config["default"].jwt_secret, {
              expiresIn: "1h"
            });
            res.status(200).json({
              token: token,
              userId: user._id.toString()
            });
            _context.next = 25;
            break;
          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](0);
            if (!_context.t0.statusCode) {
              _context.t0.statusCode = 500;
            }
            next(_context.t0);
          case 25:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 21]]);
  }));
  return function login(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var _default = {
  login: login
};
exports["default"] = _default;
//# sourceMappingURL=AuthController.js.map