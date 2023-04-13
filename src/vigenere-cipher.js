const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (type) {
    this.type = type;
    console.debug(this.type);
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');

    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let res = '';
    message = message.toUpperCase();
    key = key.toUpperCase();
    let keyIterator = 0;
    let messageLength = message.length;
    let keyLength = key.length;
    let alphabetLength = alphabet.length;

    for (let i = 0; i < messageLength; i++) {
      let messageIndex = alphabet.indexOf(message[i]);
      let keyIndex = alphabet.indexOf((keyIterator >= keyLength) ? key[keyIterator % keyLength] : key[keyIterator]);
      if (messageIndex == -1) {
        res += message[i];
        continue;
      }
      let letterIndex = messageIndex + keyIndex;
      if (letterIndex >= alphabetLength) letterIndex = letterIndex % alphabetLength;
      res += alphabet[letterIndex];
      keyIterator++;
    }
    if (this.type === false) {
      res = Array.from(res).reverse().join('');
    }
    return res;
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');

    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let res = '';
    message = message.toUpperCase();
    key = key.toUpperCase();
    let keyIterator = 0;
    let messageLength = message.length;
    let keyLength = key.length;
    let alphabetLength = alphabet.length;

    for (let i = 0; i < messageLength; i++) {
      let messageIndex = alphabet.indexOf(message[i]);
      let keyIndex = alphabet.indexOf((keyIterator >= keyLength) ? key[keyIterator % keyLength] : key[keyIterator]);
      if (messageIndex == -1) {
        res += message[i];
        continue;
      }
      let letterIndex = messageIndex - keyIndex;
      if (letterIndex < 0) letterIndex = letterIndex + alphabetLength;
      res += alphabet[letterIndex];
      keyIterator++;
    }
    
    if (this.type === false) {
      res = Array.from(res).reverse().join('');
    }
    return res;
  }
}

module.exports = {
  VigenereCipheringMachine
};
