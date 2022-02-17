"use strict";
//* Написать свою реализацию бинарного дерева поиска. (Возможности структуры данных должны быть: Добавить новый элемент, удалить элемент, найти элемент по его значению)
class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    const node = {
      value,
      left: null,
      right: null,
    }

    if (!this.root) {
      this.root = node;
      return;
    }

    let current = this.root;

    while (current) {
      if (node.value < current.value) {
        if (!current.left) {
          current.left = node;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = node;
          return;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    function callback(current) {
      if (!current) {
        return null;
      }
      if (current.value === value) {
        return current.value;
      }
      if (current.value > value) {
        return callback(current.left);
      }
      return callback(current.right);
    }
    return callback(this.root);
  }

  delete(value) {
    function findPrevios(current, previos) {
      if (!current) {
        return null;
      }
      if (current.value === value) {
        return { current, previos };
      }
      if (current.value > value) {
        return findPrevios(current.left, current);
      }
      return findPrevios(current.right, current);
    }

    function deleteEmptyElement(current, previos) {
      if (!previos) {
        this.root = null;
      }
      if (previos.left === current) {
        previos.left = null;
      }
      previos.right = null;
    }

    function deleteOneElement(current, previos) {
      let result = null;
      if (current.left) {
        result = current.left;
      }
      if (current.right) {
        result = current.left;
      }
      if (!previos) {
        this.root = result;
      }
      if (previos.left === current) {
        previos.left = result;
      }
      previos.right = result;
    }

    function deleteTwoElement(current, previos) {
      let previosResult = current;
      let result = current.left;
      if (result.right) {
        previosResult = result;
        result = result.right;
      }
      deleteOneElement(result, previosResult);
      let left = current.left;
      let right = current.right;
      if (!previos) {
        result.left = left;
        result.right = right;
        this.root = result;
      } else {
        if (previos.left === current) {
          result.left = left;
          result.right = right;
          previos.left = result;
        } else {
          result.left = left;
          result.right = right;
          previos.right = result;
        }
      }
    }

    let result = findPrevios(this.root, null);
    let current = result.current;
    let previos = result.previos;

    if (!current.left && !current.right) {
      deleteEmptyElement(current, previos);
    }
    if ((!current.left && current.right)
      || (current.left && !current.right)) {
      deleteOneElement(current, previos);
    }
    deleteTwoElement(current, previos);
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