import cheerio from 'cheerio'
import request from 'request'

function getSize(url, callback) {
  request(url, (err, resp, body) => {
    
    if (err) callback(err)
    
    let selector = '.info > span:nth-child(3)'
      , fakeDom = cheerio.load(body)
      , size = fakeDom(selector).text().replace(' kb', '')

    callback(null, size)
  })
}

export default getSize
