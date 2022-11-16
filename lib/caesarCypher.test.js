"use strict";

var _caesarCypher = _interopRequireDefault(require("./caesarCypher"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
test('hello to match ifmmp', function () {
  expect((0, _caesarCypher["default"])('hello', 1)).toMatch(/ifmmp/);
});