/**
 * 实例初始化
 */
exports._init = function (options) {
  this.$data = options.data;
  this.$el = document.querySelector(options.el);

  this.$mount();
  console.log('1')
};
