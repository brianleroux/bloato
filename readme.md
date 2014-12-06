# bloato the clown

returns the filesize history (in kb) for a given file on github

## install

    npm i bloato

## example usage

```javascript
var bloato = require('bloato')
  , sparklines = require('sparklines')
  , url = 'https://github.com/mrmrs/colors/commits/master/css/colors.css' 

bloato(url, function(err, sizes) {
  console.log(sparklines(sizes))
})
```
