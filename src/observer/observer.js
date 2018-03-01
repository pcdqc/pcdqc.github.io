import arrayAugmentations from './array-augmentations';

const ARRAY = 0;
const OBJECT = 1;
/**
 * 观察者构造函数
 * @param value {Object} 数据对象
 * @constructor
 */

function Observer (value, type) {
  this.value = value;
  // TODO 治理enumerable一定要为false,否则会出发死循环，原因未明
  // 将当前当前存储到当前对象的$observer属性中
  Object.defineProperty(value, '$observer', {
    valaue: this,
    enumerable: false,
    writable: true,
    configurable: true
  });
  if (type === ARRAY) {
    value.__proto__ = arrayAugmentations; //eslint-disable-line
    this.link(value);
  } else if (type === OBJECT) {
    this.walk(value);
  }
}

/**
 * 遍历数据对象
 * @param obj {Object} 待遍历的对象
 */
Observer.prototype.walk = function (obj) {
  let val;
  for (let key in obj) {
    if (!obj.hasOwnProperty(key)) return;

    val = obj[key];

    this.observe(key, val);

    this.convert(key, val);
  }
};
/**
 * 遍历对象属性
 */
Observer.prototype.convert = function (key, val) {
  let ob = this;
  Object.defineProperty(this.value, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      console.log('你访问了' + key);
      return val;
    },
    set: function (newVal) {
      if (newVal === val) return;
      val = newVal;
      console.log('你设置了' + key + '新的' + key + '=' + newVal);
      ob.notify('set', key, newVal);
      ob.notify(`set:${key}`, key, newVal);
    }
  });
};

/**
 * 调用创建observer函数
 * 并且判断是否有父节点，如果有，则存储父节点到自身
 * 目的是为了方便后边事件传播使用
 * @param {string} key 键值
 * @param {Any} val 属性值
 */
Observer.prototype.observe = function (key, val) {
  let ob = Observer.create(val);
  if (!ob) return;
  ob.parent = {
    key,
    ob: this
  };
};

/**
 * 这个方法是用来处理如下情况: var ary = [1, {name: liangshaofeng}]
 * 也就是说 当数组的某些项是一个对象的时候
 * 那么需要给这个对象创建observer监听它
 */
Observer.prototype.link = function (items) {
  items.forEach((value, index) => {
    this.observe(index, value);
  });
};

/**
 * 订阅事件
 */
Observer.prototype.on = function (event, fn) {
  this._cbs = this._cbs || {};
  if (!this._cbs[event]) {
    this._cbs[event] = [];
  }
  this._cbs[event].push(fn);

  // 级联调用
  return this;
};
/**
 * 触发消息 并且将消息逐层向上传播
 */
Observer.prototype.notify = function (event, path, val) {
  this.emit(event, path, val);
  let parent = this.parent;
  if (!parent) return;
  let ob = parent.ob;
  ob.notify(event, path, val);
};
/**
 * 触发执行回调函数
 * @param event {string} 事件类型
 * @param event {path} 事件触发路径
 */
Observer.prototype.emit = function (event, path, val) {
  this._cbs = this.cbs || {};
  let callbacks = this._cbs[event];

  if (!callbacks) return;

  callbacks = callbacks.slice(0);
  callbacks.forEach((cb, i) => {
    callbacks[i].apply(this, arguments);
  });
};

Observer.create = function (value, options) {
  if (Array.isArray(value)) {
    return new Observer(value, ARRAY);
  } else if (typeof value === 'object') {
    return new Observer(value, OBJECT);
  }
};

module.exports = Observer;
