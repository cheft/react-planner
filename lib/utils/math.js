"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toFixedFloat = toFixedFloat;
/** @description Return float fixed to desired precision
 *  @param {number} num Float to fix
 *  @param {number} precision Desired precision, or 6 if not specified
 *  @return {number}
*/
function toFixedFloat(num) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;

  if (num && precision) {
    var prec = Math.pow(10, precision);
    return ~~(num * prec) / prec;
  }
  return 0;
}

/** @description Return absolute value of a number
 *  @param {number} n Number of wich get value without sign
 *  @return {number}
*/
var fAbs = exports.fAbs = function fAbs(n) {
  var x = n;x < 0 && (x = ~x + 1);return x;
};