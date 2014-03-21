# reqwestify

> Drop-in [`reqwest`][1] alias for [`request`][2] using Browserify

Write your code using `request`. It can be used in Node.

```js
var request = require('request');

module.exports = function (done) {
  var opts = {
    url: 'https://api.github.com/zen',
    headers: {
      'User-Agent': 'https://github.com/bevacqua/buildfirst' 
    },    
    crossOrigin: true
  };

  request(opts, cb);

  function cb (err, res, body) {
    done(null, res.body);
  }
}
```

```shell
node quote
```

[1]: https://github.com/ded/reqwest
[2]: https://github.com/mikeal/request