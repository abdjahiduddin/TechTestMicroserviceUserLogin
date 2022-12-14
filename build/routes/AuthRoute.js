"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _expressValidator = require("express-validator");
var _IndexControllers = _interopRequireDefault(require("../controllers/IndexControllers"));
var _validation = _interopRequireDefault(require("../helper/validation"));
var router = (0, _express.Router)();
router.post("/login", [(0, _expressValidator.body)("email").isEmail().withMessage("Please enter valid email").trim().normalizeEmail()], _validation["default"].result, _IndexControllers["default"].AuthController.login);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=AuthRoute.js.map