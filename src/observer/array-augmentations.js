// 定义一个对象，她的属性中有push邓经过改写的数组方法
const aryMethods = ['push', 'pop', 'shift', 'unshift', 'splice'];
const arrayAugmentations = [];

aryMethods.forEach((method) => {
  let original = Array.prototype[method];

  arrayAugmentations[method] = function () {
    console.log('我被改变啦');
    return original.apply(this, arguments);
  }
});

module.exports = arrayAugmentations;
