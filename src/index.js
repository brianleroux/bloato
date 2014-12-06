import async from 'async'
import historic from './get-history'
import getSize from './get-size'

function getSizes(url, callback) {
  historic(url, (err, urls) => {
    async.map(urls, getSize, callback) 
  })
}

export default getSizes
