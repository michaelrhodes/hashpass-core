var test = require('tape')
var hashpass = require('./index')

test('it works', function (assert) {
  var pwd = hashpass('github.com', 'abc123')
  assert.equal(pwd, 'aimnHLCvW/um84ka')
  assert.end()
})
