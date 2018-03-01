exports.$mount = function () {
  console.log('rerender');
  this._compile();
};
