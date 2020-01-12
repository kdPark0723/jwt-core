const Token = require('./token');

function createTokenByPayload(payload) {
  return new Token(payload);
}

module.exports = createTokenByPayload;
