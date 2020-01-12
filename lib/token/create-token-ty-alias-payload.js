const createTokenByPayload = require('./create-token-by-payload');

// TODO integrate claim alias
function createTokenByAliasPayload({
  issuer: iss,
  subject: sub,
  audience: aud,
  expiresIn: exp,
  notBefore: nbf,
  issuedAt: iat,
  jwtid: jti,
  ...others
}) {
  const payload = others;

  if (iss) payload.iss = iss;
  if (sub) payload.sub = sub;
  if (aud) payload.aud = aud;
  if (exp) payload.exp = exp;
  if (nbf) payload.nbf = nbf;
  if (iat) payload.iat = iat;
  if (jti) payload.jti = jti;

  return createTokenByPayload(payload);
}

module.exports = createTokenByAliasPayload;
