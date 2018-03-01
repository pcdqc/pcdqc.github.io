function Due (options) {
  this._init(options);
}

Due.prototype = {
  constructor: Due,
  ...require('./instance/init'),
  ...require('./instance/compile'),
  ...require('./api/lifecycle')
};

module.exports = Due;
