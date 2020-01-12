# JWT Core

**You can simply use jwt**

​    

This project was created to make using `jsonwebtoken` easier.

Most features can be used the same as `jsonwebtoken`

​    

## Install

```shell
$ npm i jwt-core
```

​    

## Usage

### Create Token By Payload

```js
const jwt = require('jwt-core')

const token = new jwt.Token(payload);
```

- `payload` is same [`jsonwebtoken`](https://www.npmjs.com/package/jsonwebtoken#jwtsignpayload-secretorprivatekey-options-callback)

​    

#### you also use create method

```js
const jwt = require('jwt-core')

const token = jwt.Token.createByPayload(payload);
```

- `payload` is same [`jsonwebtoken`](https://www.npmjs.com/package/jsonwebtoken#jwtsignpayload-secretorprivatekey-options-callback)

​    

### Create Token By Aliased Payload

```js
const jwt = require('jwt-core')

const token = jwt.Token.createByAliasPayload(payload);
```

- you can use claim key by aliased key

  ```js
  {
    issuer: 'iss',
    subject: 'sub',
    audience: 'aud',
    expiresIn: 'exp',
    notBefore: 'nbf',
    issuedAt: 'iat',
    jwtid: 'jti',
  }
  ```

- `payload` is same [`jsonwebtoken`](https://www.npmjs.com/package/jsonwebtoken#jwtsignpayload-secretorprivatekey-options-callback)

​    

### Create Token By Encoding Token

```js
const jwt = require('jwt-core')

const token = jwt.Token.createByEncodingToken(jwtString, secretOrPrivateKey, options);
```

- `options` is same [`jsonwebtoken`](https://www.npmjs.com/package/jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback)

​    

## Encode Token

```js
token.encode(secretOrPrivateKey, options);
```

- `options` is same [`jsonwebtoken`](https://www.npmjs.com/package/jsonwebtoken#jwtsignpayload-secretorprivatekey-options-callback)

​    

## Get And Set Token Claim

### Get

```js
token.get(key);
```

- Alias is applied

​    

### Set

```js
token.set(key, value);
```

- Alias is applied
