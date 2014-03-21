module.exports = function (opts, cb) {
  var reqwest = require('reqwest');

  if (typeof opts === 'string') {
  	opts = { url: opts.url };
  }
  if (!opts.headers || !opts.headers['User-Agent']) {
  	opts.headers['User-Agent'] = 'request';
  }
  opts.error = cb;

  return reqwest(opts, function (res) {
  	cb(null, res, res.body);
  });
};
