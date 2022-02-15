"use strict";
//* task 1
// Написать свою реализацию функций bind, call. Новая реализация должна по функционалу работать аналогично как и соответствующие стандартные функции. Без использования стандартных функций.
Function.prototype.myBind = function (context, ...rest) {
  let value = this;
  return function (...args) {
    let index = Symbol();
    context[index] = value;
    const result = context[index](...rest, ...args);
    delete context[index];
    return result;
  };
};

Function.prototype.myCall = function (context, ...args) {
  let value = this;
  const index = Symbol();
  context[index] = value;
  const result = context[index](...args);
  delete context[index];
  return result;
};
//* task 2
// Написать свою реализацию функций для работы с массивами, которые являются аналогами следующих функций: map, filter, reduce, find, forEach. Без использования стандартных функций.

Array.prototype.myMap = function (callback, thisArg) {
  thisArg = thisArg || this;
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      result[i] = callback.call(thisArg, this[i], i, this);
    }
  }
  return result;
};

Array.prototype.myFilter = function (callback, thisArg) {
  thisArg = thisArg || this;
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      if (callback.call(thisArg, this[i], i, this)) {
        result.push(this[i]);
      }
    }
  }
  return result;
};

Array.prototype.myReduce = function (callback, initialValue) {
  let result;
  let index = 0;
  if (arguments.length >= 2) {
    result = initialValue;
  } else {
    if (this.length === 0) {
      throw new Error('Reduce of empty array with no initial value.');
    }
    result = this[index];
    index++;
  }
  for (; index < this.length; index++) {
    if (index in this) {
      result = callback(result, this[index], index, this);
    }
  }
  return result;
};

Array.prototype.myFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      callback(this[i], i, this);
    }
  }
};