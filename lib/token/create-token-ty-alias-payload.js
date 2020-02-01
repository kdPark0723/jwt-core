const createTokenByPayload = require('./create-token-by-payload');
const claimAlias = require('../claim/claim-alias');

function createTokenByAliasPayload(payload) {
  const parsedPayload = {};

  Object.entries(payload).forEach(([key, value]) => {
    if (claimAlias.has(key)) parsedPayload[claimAlias.get(key)] = value;
    else parsedPayload[key] = value;
  });

  return createTokenByPayload(parsedPayload);
}

module.exports = createTokenByAliasPayload;
