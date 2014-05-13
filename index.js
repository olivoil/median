
/**
 * Module dependencies.
 */

var toFunction = require('to-function');

/**
 * Return the median value in `arr` with optional callback `fn(val, i)`.
 *
 * @param {Array} arr
 * @param {Function} [fn]
 * @return {Number}
 * @api public
 */

module.exports = function(arr, fn){
  if (0 == arr.length) return null;
  var values = [];

  if (fn) {
    fn = toFunction(fn);
    for (var i = 0; i < arr.length; ++i) {
      values.push(fn(arr[i], i));
    }
  } else {
    for (var i = 0; i < arr.length; ++i) {
      values.push(arr[i]);
    }
  }

  values.sort( function(a,b) {return a - b} );

  var half = Math.floor(values.length/2);

  if(values.length % 2) return values[half];
  else return (values[half-1] + values[half]) / 2.0;
};
