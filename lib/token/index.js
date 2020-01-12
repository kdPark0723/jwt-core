const Token = require('./token');
const createTokenByEncodingToken = require('./create-token-by-encoding-token');
const createTokenByPayload = require('./create-token-by-payload');
const createTokenByAliasPayload = require('./create-token-ty-alias-payload');

Token.createByEncodingToken = createTokenByEncodingToken;
Token.createByPayload = createTokenByPayload;
Token.createByAliasPayload = createTokenByAliasPayload;

module.exports = { Token };
