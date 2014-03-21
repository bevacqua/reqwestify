module.exports = function (opts, cb) {
  var reqwest = require('reqwest');

  if (typeof opts === 'string') {
  	opts = { url: opts.url };
  }
  if (opts.headers) {
  	delete opts.headers['User-Agent'];
  }
  opts.error = cb;

  return reqwest(opts, function (res) {
  	cb(null, res, res.body);
  });
};
