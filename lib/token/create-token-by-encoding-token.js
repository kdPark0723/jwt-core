const jwt = require('../jwt');
const Token = require('./token');

function createTokenByEncodingToken(jwtString, secretOrPrivateKey, options) {
  const payload = jwt.verify(jwtString, secretOrPrivateKey, options);

  return new Token(payload);
}

module.exports = createTokenByEncodingToken;
