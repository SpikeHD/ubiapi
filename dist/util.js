"use strict";

/**
 * Encode URI path the way the Ubi api likes it,
 * just to avoid any potential mishaps
 * 
 * @param {String} comp 
 */
exports.ubiEncode = function (comp) {
  // Decode fully and re-encode, to avoid layered encoding
  var conv = encodeURI(module.exports.dirtyDecode(comp)).replace(/:/g, '%3A').replace(/,/g, '%2C') // Why? No idea.
  .replace(/%+?(?=7C)/g, '%25');
  return conv;
};
/**
 * Forcefully decode a URI path to try and remove
 * multiple layers of decoding and get the
 * cleanest string possible
 * 
 * @param {String} str 
 */


exports.dirtyDecode = function (str) {
  var last = decodeURIComponent(str);
  var done = false; // Forcefully decode until we can't anymore
  // Makes sure we have the cleanest URI possible

  while (!done) {
    var cur = decodeURIComponent(last);

    if (cur === last) {
      done = true;
      return last;
    }
  }
};