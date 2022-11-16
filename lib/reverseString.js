"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function reverseString(string) {
  var result = [];
  var strArr = string.split("");
  var length = strArr.length;
  for (var i = 0; i < length; i++) {
    result.push(strArr.pop());
  }
  return result.join("");
}
var _default = reverseString;
exports["default"] = _default;