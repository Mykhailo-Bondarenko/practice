"use strict";
//* Написать свою реализацию бинарного дерева поиска. (Возможности структуры данных должны быть: Добавить новый элемент, удалить элемент, найти элемент по его значению)
class BinaryTree {

  constructor(data) {
    this.data = data ?? null;
    this.left = null;
    this.right = null;
  }

  add(data) {
    if (!this.data) {
      this.data = data;
    }
    if (data < this.data && this.left) {
      this.left.add(data);
    } else if (data < this.data) {
      this.left = new BinaryTree(data);
    }
    if (data > this.data && this.right) {
      this.right.add(data);
    } else if (data > this.data) {
      this.right = new BinaryTree(data);
    }
  }

  find(data) {
    if (this.data === data) {
      return this;
    }
    if (data < this.data && this.left) {
      return this.left.find(data);
    }
    if (data > this.data && this.right) {
      return this.right.find(data);
    }
    return null;
  }

  remove(data) {
    if (data < this.data) {
      this.left = this.left.remove(data);
      return this;
    }
    if (data > this.data) {
      this.right = this.right.remove(data);
      return this;
    }
    if (!this.left && !this.right) {
      return null;
    }
    if (!this.left) {
      return this.right;
    }
    if (!this.right) {
      return this.left;
    }
    let result = this.right.min();
    this.data = result.data;
    this.right = this.right.remove(result.data);
    return this;
  }

  min() {
    if (!this.left) {
      return this;
    }
    return this.min(this.left);
  }
}

//* Написать сортировку двумя различными методами (Можно выбрать любые методы сортировки, самые простые: пузырьковая, выбором)
Array.prototype.selectiveSort = function (callback) {
  if (this.length < 2) {
    return this;
  }
  if (typeof callback !== 'function') {
    callback = (itemOne, itemTwo) => itemOne > itemTwo;
  }
  for (let i = 0; i < this.length; i++) {
    let lesserNumber = i;
    for (let j = i; j < this.length; j++) {
      if (callback(this[lesserNumber], this[j])) {
        lesserNumber = j;
      }
    }
    if (lesserNumber !== i) {
      [this[lesserNumber], this[i]] = [this[i], this[lesserNumber]];
    }
  }
  return this;
};

Array.prototype.boobleSort = function (callback) {
  if (this.length < 2) {
    return this;
  }
  if (typeof callback !== 'function') {
    callback = (itemOne, itemTwo) => itemOne > itemTwo;
  }
  const length = this.length - 1;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i; j++) {
      if (callback(this[j], this[j + 1])) {
        [this[j + 1], this[j]] = [this[j], this[j + 1]];
      }
    }
  }
  return this;
};