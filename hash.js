var sha256 = require('sjcl-hash-sha256/hash')

module.exports = function (domain, key) {
  var n = Math.pow(2, 16)
  var pwd = domain + '/' + key
  while (n--) pwd = sha256(pwd)
  return pwd
}
