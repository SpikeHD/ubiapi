/**
 * Encode URI path the way the Ubi api likes it,
 * just to avoid any potential mishaps
 * 
 * @param {String} comp 
 */
exports.ubiEncode = (comp) => {
  // Decode fully and re-encode, to avoid layered encoding
  let conv = encodeURI(module.exports.dirtyDecode(comp)).replace(/:/g, '%3A')
    .replace(/,/g, '%2C')
    // Why? No idea.
    .replace(/%+?(?=7C)/g, '%25')

  return conv
}

/**
 * Forcefully decode a URI path to try and remove
 * multiple layers of decoding and get the
 * cleanest string possible
 * 
 * @param {String} str 
 */
exports.dirtyDecode = (str) => {
  let last = decodeURIComponent(str)
  let done = false

  // Forcefully decode until we can't anymore
  // Makes sure we have the cleanest URI possible
  while(!done) {
    let cur = decodeURIComponent(last)
    if (cur === last) {
      done = true
      return last
    }
  }
}