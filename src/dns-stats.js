const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  if (domains.length == 0) return result;

  for (let i = 0; i < domains.length; i++) {
    let itemReversed = '.' + domains[i].split('.').reverse().join('.');
    let index = 0;

    while (index > -1) {
      index = itemReversed.indexOf('.', index + 1);
      if (index > -1) {
        let part = itemReversed.slice(0, index);
        part in result ? result[part] += 1 : result[part] = 1;
      } else {
        itemReversed in result ? result[itemReversed] += 1 : result[itemReversed] = 1;
      }
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
