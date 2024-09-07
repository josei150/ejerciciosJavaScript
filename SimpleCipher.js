const alphabet = "abcdefghijklmnopqrstuvwxyz"
class Cipher {
  constructor(keyToCipher = "aaaaaaaaaa") {
    this._key = keyToCipher
  }

  encode(text) {
    let textEncoded = "";
    for (let indexLetter = 0; indexLetter < text.length; indexLetter++) {

      if (alphabet.indexOf(text[indexLetter]) + alphabet.indexOf(this._key[indexLetter]) > 25) {
        textEncoded += alphabet[alphabet.indexOf(text[indexLetter]) + alphabet.indexOf(this._key[indexLetter > this._key.length - 1 ? indexLetter % this._key.length : indexLetter]) - 26]
      }
      else {
        textEncoded += alphabet[alphabet.indexOf(text[indexLetter]) + alphabet.indexOf(this._key[indexLetter > this._key.length - 1 ? indexLetter % this._key.length : indexLetter])]
      }
    }
    return textEncoded
  }

  decode(text) {
    let textEncoded = "";
    for (let indexLetter = 0; indexLetter < text.length; indexLetter++) {

      if (alphabet.indexOf(text[indexLetter]) - this._key.indexOf(this._key[indexLetter]) < 0) {
        textEncoded += alphabet[alphabet.indexOf(text[indexLetter]) - this._key.indexOf(this._key[indexLetter > this._key.length - 1 ? indexLetter % this._key.length : indexLetter]) + 26]
      }
      else {
        textEncoded += alphabet[alphabet.indexOf(text[indexLetter]) - this._key.indexOf(this._key[indexLetter > this._key.length - 1 ? indexLetter % this._key.length : indexLetter])]
      }
    }
    return textEncoded
  }

  get key() {
    return this._key;
  }
}

const cipher = new Cipher("abc")
// const cipher2 = new Cipher("abcdefghij")
// console.log(cipher2.encode('zzzzzzzzzz')); //zabcdefghi
// console.log(cipher2.decode('zabcdefghi')) //zzzzzzzzzz