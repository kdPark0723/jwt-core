const jwt = require('../jwt');

function encodeToken(token, secretOrPrivateKey, options) {
  const payload = { ...token };

  return jwt.sign(payload, secretOrPrivateKey, options);
}

module.exports = encodeToken;
