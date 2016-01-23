var b64 = require('sjcl-codec-base64/from-bits')
var hash = require('./hash')

function hashpass (domain, key) {
  return b64(hash(domain, key)).substr(0, 16)
}

module.exports = hashpass
