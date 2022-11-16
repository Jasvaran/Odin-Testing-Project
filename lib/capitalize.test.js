"use strict";

var _capitalize = _interopRequireDefault(require("./capitalize"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
test('capitalze first letter in string', function () {
  expect((0, _capitalize["default"])('hello')).toBe('Hello');
});
test('HELLO should become HELLO', function () {
  expect((0, _capitalize["default"])('HELLO')).toBe('HELLO');
});
test('Hello should become Hello', function () {
  expect((0, _capitalize["default"])('Hello')).toBe('Hello');
});