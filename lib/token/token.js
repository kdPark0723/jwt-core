const claimAlias = require('../claim/claim-alias');
const encodeToken = require('./encode-token');

class Token {
  constructor(payload) {
    Object.assign(this, payload);
  }

  encode(secretOrPrivateKey, options) {
    return encodeToken(this, secretOrPrivateKey, options);
  }

  get(key) {
    const alias = claimAlias[key];
    const value = this[key];

    if (value === undefined && alias !== undefined) {
      return this[alias];
    }

    return value;
  }

  set(key, value) {
    const alias = claimAlias[key];

    if (alias !== undefined) {
      this[alias] = value;
    } else {
      this[key] = value;
    }
  }
}

module.exports = Token;
