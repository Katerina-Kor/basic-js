const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  let repeatTimes = options.repeatTimes || 1;
  let separator = ('separator' in options) ? String(options.separator) : '+';
  let addition = ('addition' in options) ? String(options.addition) : '';
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = ('additionSeparator' in options) ? String(options.additionSeparator) : '|';

  let resStr = str.toString();

  for (let i = 0; i < repeatTimes; i++) {
    if (i > 0) resStr += str;
    for (let j = 0; j < additionRepeatTimes; j++) {
      resStr += addition;
      if (!(j + 1 == additionRepeatTimes)) {
        resStr += additionSeparator;
      }
    }
    if (!(i + 1 == repeatTimes)) {
      resStr += separator;
    }
  }
  return resStr;

}

module.exports = {
  repeater
};
