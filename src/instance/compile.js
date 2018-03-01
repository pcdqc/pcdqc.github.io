exports._compile = function () {
  this.fragment = document.createDocumentFragment();
  this._compileNode(this.$template);
  this.$el.innerHTML = '';
  this.fragment.childNodes.forEach((child) => {
    this.$el.appendChild(child.cloneNode(true));// cloneNode() 方法克隆所有属性以及它们的值。 如果您需要克隆所有后代，请把 deep 参数设置 true，否则设置为 false。
  });
};

exports._compileElement = function (node) {
  this.currentNode = document.createElement(node.tagName);
  this.fragment.appendChild(this.currentNode);
  if (node.hasChildNodes()) {
    Array.from(node.childNodes).forEach(this._compileNode, this);
  }
};

exports._compileText = function (node) {
  let nodeValue = node.nodeValue;
  if (nodeValue === '') return;
  let patt = /{{[\s\S]+}}/g;
  let ret = nodeValue.match(patt);

  if (!ret) return;
  ret.forEach((value) => {
    let property = value.replace(/[{}]/g, '');
    if (property.indexOf('.') !== -1) {
      nodeValue = nodeValue.replace(value, findDeepObjValue(this.$data, property));
    } else {
      nodeValue = nodeValue.replace(value, this.$data[`${property}`]);
    }
  }, this);
  // FIXME: 深层的对象这里应该怎么去取值
  function findDeepObjValue (data, key) {
    let arr = key.split('.');
    return data[arr[0]][arr[1]];
  }

 /*  node.nodeValue = nodeValue; */
  this.currentNode.appendChild(document.createTextNode(nodeValue));
};

exports._compileNode = function (node) {
  switch (node.nodeType) {
    case 1:
      this._compileElement(node);
      break;
    case 3:
      this._compileText(node);
      break;
    default:
      return;
  }
};
