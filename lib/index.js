const claim = require('./claim');
const token = require('./token');

module.exports = {
  ...claim,
  ...token,
};
