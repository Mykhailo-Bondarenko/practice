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
  let array = Object(this);
  const result = [];
  let index = 0;
  while (index < array.length) {
    if (index in array) {
      result[index] = callback.call(thisArg, this[index], index, array);
    }
    index++;
  }
  return result;
};

Array.prototype.myFilter = function (callback, thisArg) {
  thisArg = thisArg || this;
  const array = Object(this);
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (i in array) {
      if (callback.call(thisArg, this[i], i, array)) {
        result.push(this[i]);
      }
    }
  }
  return result;
};

Array.prototype.myReduce = function (callback, initialValue) {
  let result;
  let index = 0;
  let array = Object(this);
  if (arguments.length >= 2) {
    result = initialValue;
  } else {
    if (array.length === 0) {
      throw new Error('Reduce of empty array with no initial value.');
    }
    result = array[index];
    index++;
  }
  for (; index < array.length; index++) {
    if (index in array) {
      result = callback(result, this[index], index, array);
    }
  }
  return result;
};

Array.prototype.myFind = function (callback) {
  let index = 0;
  while (index < this.length) {
    if (callback(this[index], index, this)) {
      return this[index];
    }
    index++;
  }
  return undefined;
};

Array.prototype.myForEach = function (callback) {
  let index = 0;
  while (index < this.length) {
    if (index in this) {
      callback(this[index], index, this);
    }
    index++;
  }
};