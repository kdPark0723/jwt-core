const jwt = require('../lib');

/* eslint-disable no-undef */


describe('Create Token', () => {
  test('create by new', async () => {
    const issuer = 'jwt-core-test';

    const token = new jwt.Token({ iss: issuer });
    expect(token.iss).toEqual(issuer);
  });

  test('create by alias payload', async () => {
    const issuer = 'jwt-core-test';

    const token = jwt.Token.createByAliasPayload({ issuer });
    expect(token.iss).toEqual(issuer);
  });

  test('create by payload', async () => {
    const issuer = 'jwt-core-test';

    const token = jwt.Token.createByPayload({ iss: issuer });
    expect(token.iss).toEqual(issuer);
  });

  test('create by encoding token', async () => {
    const issuer = 'jwt-core-test';
    const secret = 'secret';

    const originToken = jwt.Token.createByAliasPayload({ issuer });
    const encodingToken = originToken.encode(secret);

    const newToken = jwt.Token.createByEncodingToken(encodingToken, secret);

    expect(newToken.iss).toEqual(originToken.iss);
  });
});

/* eslint-enable no-undef */
