const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  if (arr.length == 0) return arr;
  let controls = ['--double-next', '--double-prev', '--discard-next', '--discard-prev'];

  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!(controls.includes(arr[i]))) resultArr.push(arr[i]);
    if (arr[i] == controls[0] && (i+1 < arr.length)) resultArr.push(arr[i+1]);
    if (arr[i] == controls[1] && (i-1 >= 0) && (resultArr.at(-1) == arr[i-1])) resultArr.push(arr[i-1]);
    if (arr[i] == controls[2]) i++;
    if (arr[i] == controls[3] && (resultArr.at(-1) == arr[i-1])) resultArr.pop(arr[i-1]);
  }
  return resultArr;

}

module.exports = {
  transform
};
