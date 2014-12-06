import req from 'request'
import cheerio from 'cheerio'

function getHistory(url, callback) {

  req(url, (err, resp, body) => {
    
    if (err) callback(err)

    let fakeDom = cheerio.load(body)
      , anchors = fakeDom('a.button-outline.tooltipped.tooltipped-s')
      , getUrl  = (i, a) => a.attribs.href
      , urls    = anchors.map(getUrl)
      , arr     = []

    // return a clean array of urls 
    for (var i = 0; i < urls.length; i++) 
      arr.push('https://github.com' + urls[i])
    
    callback(null, arr.reverse())
  })
}

export default getHistory
