import test from 'tape'
import getSizes from './'
import getSize from './dist/get-size'
import getHistory from './dist/get-history'
import sparkline from 'sparkline'

let url = 'https://github.com/mrmrs/colors/commits/master/css/colors.css'
  , file = 'https://github.com/mrmrs/colors/blob/55e17cf3a655b0ac7613341a1f2c11b39c33bea4/css/colors.css'

test('exists', (t) => {
  t.ok(getSizes, 'getshas is here')
  t.end()
})

test('can get size for a file', (t) => {
  t.ok(getSize, 'can import') 
  getSize(file, (err, size) => {
    t.ok(size, 'got the size ' + size)
    t.end()
  })
})

test('can get the history', (t) => {
  t.ok(getHistory, 'can import get history')
  getHistory(url, (err, h) => {
    if (err) t.fail(err)
    t.ok(h, 'got the history ' + h)
  })  
  t.end()
})

test('can get shas', (t) => {
  getSizes(url, (err, d) => {
    t.ok(true, 'got em ' + d)
    console.log(sparkline(d))
    t.end()
  })
})

