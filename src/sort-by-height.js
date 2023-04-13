const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let sortedArr = arr.filter(item => item != -1).sort((a, b) => a - b);

  let i = 0;
  arr.forEach((item, index, array) => {
    if (item != -1) {
      array[index] = sortedArr[i];
      i++;
    }
  });

  return arr;
}

module.exports = {
  sortByHeight
};
