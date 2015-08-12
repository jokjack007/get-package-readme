var getPackageReadme = require('../')
var test = require('tape')

test('get package readme for "webtorrent"', function (t) {
  t.plan(4)
  getPackageReadme('webtorrent', function (err, readme) {
    t.ok(/webtorrent/i.test(readme))
    t.ok(/feross aboukhadijeh/i.test(readme))
    t.ok(/streaming torrent client/i.test(readme))
    t.ok(/features/i.test(readme))
  })
})

test('get error for invalid package name', function (t) {
  t.plan(1)
  getPackageReadme('invalid-package-name-92342384', function (err, readme) {
    t.ok(err instanceof Error)
  })
})