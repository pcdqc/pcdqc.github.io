function Due (options) {
  this._init(options);
}

Due.prototype = {
  constructor: Due,
  ...require('./instance/init'),
  ...require('./instance/compile'),
  ...require('./api/lifecycle'),
  ...require('./api/data'),
  observer: {...require('./observer/observer')}
};

module.exports = Due;
