"use strict";
//* task 1
// Написать свою реализацию функций bind, call. Новая реализация должна по функционалу работать аналогично как и соответствующие стандартные функции. Без использования стандартных функций.
//* bind 
//* call 

//* task 2
// Написать свою реализацию функций для работы с массивами, которые являются аналогами следующих функций: map, filter, reduce, find, forEach. Без использования стандартных функций.
Array.prototype.myMap = function (callback, thisArg) {
  let value = this;
  if (arguments.length > 1) {
    value = thisArg;
  }
  let array = Object(this);
  const result = [];
  let index = 0;
  while (index < array.length) {
    if (index in array) {
      result[index] = callback.call(value, this[index], index, array);
    }
    index++;
  }
  return result;
}

Array.prototype.myFilter = function (callback, thisArg) {
  const value = this;
  if (arguments.length > 1) {
    value = thisArg;
  }
  const array = Object(this);
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (i in array) {
      if (callback.call(value, this[i], i, array)) {
        result.push(this[i]);
      }
    }
  }
  return result;
}

Array.prototype.myReduce = function (callback, initialValue) {
  let result;
  let index = 0;
  let array = Object(this);
  let length = array.length;
  if (arguments.length >= 2) {
    result = initialValue;
  } else {
    if (length === 0) {
      throw new Error('Reduce of empty array with no initial value.');
    }
    result = array[index];
    index++;
  }
  for (; index < length; index++) {
    if (index in array) {
      result = callback(result, this[index], index, array);
    }
  }
  return result;
}

Array.prototype.myFind = function (callback, thisArg) {
  let value = this;
  if (arguments.length > 1) {
    value = thisArg;
  }
  let array = Object(this);
  let length = array.length;
  let index = 0;
  while (index < length) {
    if (callback.call(value, this[index], index, array)) {
      return this[index];
    }
    index++;
  }
  return undefined;
}

Array.prototype.myForEach = function (callback, thisArg) {
  let value = this;
  if (arguments.length > 1) {
    value = thisArg;
  }
  let array = Object(this);
  let length = array.length;
  let index = 0;
  while (index < length) {
    if (index in array) {
      callback.call(value, this[index], index, array);
    }
    index++;
  }
}