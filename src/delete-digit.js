const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = Array.from(String(n));
  let maxNumber = Number(arr.slice(1).join(''));

  for (let i = 1; i < arr.length; i++) {
    let number = Number(arr.slice(0, i).join('') + arr.slice(i+1).join(''));
    if (number > maxNumber) maxNumber = number;
  }
  return maxNumber;
}

module.exports = {
  deleteDigit
};
