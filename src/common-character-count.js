const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let s1Arr = Array.from(s1);
  let s2Arr = Array.from(s2);
  let res = 0;

  for (let letter of s1Arr) {
    let index = s2Arr.indexOf(letter);
    if (index == -1) continue;
    res++;
    s2Arr.splice(index, 1);
  }
  return res;
}

module.exports = {
  getCommonCharacterCount
};
