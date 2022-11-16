"use strict";

var _calculator = _interopRequireDefault(require("./calculator"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
test('Add 1 + 2 to equal 3', function () {
  expect((0, _calculator["default"])().sum(1, 2)).toBe(3);
});
test('Subtract 3 - 2 to equal 1', function () {
  expect((0, _calculator["default"])().subtract(3, 2)).toBe(1);
});
test('multiply 2 * 5 to equal 10', function () {
  expect((0, _calculator["default"])().multiply(2, 5)).toBe(10);
});
test('divide 10 / 2 to equal 5', function () {
  expect((0, _calculator["default"])().divide(10, 2)).toBe(5);
});