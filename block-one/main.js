"use strict";
//* task 1 
// Написать функцию которая проверяет являются две строки анаграммой или нет

function checkIsAnagramma(strOne, strTwo) {
  if (arguments[1] === undefined || arguments.length > 2) {
    throw new Error('Must be two arguments.');
  }
  if (typeof strOne !== 'string' || typeof strTwo !== 'string') {
    throw new Error('Arguments must be a string.');
  }
  if (strOne.length !== strTwo.length) {
    return false;
  }
  let counterOne = 0;
  let counterTwo = 0;
  for (let i = 0; i < strOne.length; i++) {
    let letterOne = strOne[i];
    for (let j = 0; j < strTwo.length; j++) {
      let letterTwo = strOne[j];
      if (letterOne === letterTwo) {
        counterOne++;
      }
      letterTwo = strTwo[j];
      if (letterOne === letterTwo) {
        counterTwo++;
      }
    }
    if (counterOne !== counterTwo) {
      return false;
    }
  }
  return true;
}

//* task 2 
// https://github.com/Mykhailo-Bondarenko/block-one/blob/master/task%202.jpg

//* task 3 
// Написать функцию которая вычисляет подсчет количество цифр в числе. Реализовать с помощью рекурсии.

function countNumberDigits(number) {
  if (typeof number !== 'number') {
    throw new Error('Argument must be a number.');
  }
  if (arguments.length > 1) {
    throw new Error('There must be only one argument.');
  }
  let result = 0;
  if (number < 0) {
    number *= -1;
  }
  if (number < 10) {
    return 1;
  }
  while (number) {
    result++;
    number = Math.floor(number / 10);
  }
  return result;
}

function countNumberDigitsRecursion(number, result) {
  if (typeof number !== 'number') {
    throw new Error('Argument must be a number.');
  }
  result = result || 1;
  if (number < 0) {
    number *= -1;
  }
  if (number < 10) {
    return result;
  }
  return countNumberDigitsRecursion(number / 10, ++result);
}

//* task 4
// Реализовать функцию которая проверяет, является ли строка палиндромом

function checkIsPolindrome(str) {
  if (typeof str !== 'string') {
    throw new Error('Argument must be a string.');
  }
  if (arguments.length > 1) {
    throw new Error('There must be only one argument.');
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}

//* task 5
// Написать функцию которая вычисляет подсчет уникальных слов в предложении
String.prototype.mySplit = function (str, separator) {
  if (typeof str !== "string") {
    throw new Error("Argument must be a string.");
  }
  const result = [];
  let string = '';
  const length = str.length - 1;
  for (let i = 0; i <= length; i++) {
    if (separator === '') {
      result.push(str[i]);
    } else {
      if (str[i] !== separator) {
        string += str[i];
        if (i === length) {
          result.push(string);
        }
      } else {
        result.push(string);
        string = '';
      }
    }
  }
  return result;
}

function countUniqueWords(str) {
  if (typeof str !== 'string') {
    throw new Error('Argument must be a string.');
  }
  if (arguments.length > 1) {
    throw new Error('There must be only one argument.');
  }
  str = str.replace(/[^a-zа-яё0-9\s]/gi, '');
  const countWords = {};
  const arrayWords = str.mySplit(str, ' ');
  let result = 0;
  for (const item of arrayWords) {
    if (item === '') {
      continue;
    }
    countWords[item] ? countWords[item]++ : countWords[item] = 1;
  }
  for (const value of Object.keys(countWords)) {
    if (value !== undefined) {
      result++;
    }
  }
  return result;
}

//* task 6 
// Написать функцию которая вычисляет вхождение каждого слова в предложение

function countWords(str) {
  if (typeof str !== 'string') {
    throw new Error('Argument must be a string.');
  }
  if (arguments.length > 1) {
    throw new Error('There must be only one argument.');
  }
  str = str.replace(/[^a-zа-яё0-9\s]/gi, '');
  const countWords = {};
  const arrayWords = str.mySplit(str, ' ');
  for (const item of arrayWords) {
    if (item === '') {
      continue;
    }
    countWords[item] ? countWords[item]++ : countWords[item] = 1;
  }
  return countWords;
}

// //* task 7 
//Вычислить периметр и площадь для прямоугольника, треугольника и круга. С помощью конструктора и классов.

class Rectangle {
  constructor(width, heigth) {
    if (typeof width !== 'number'
      || typeof heigth !== 'number'
      || width <= 0
      || heigth <= 0) {
      throw new Error('Arguments must be a positive number.');
    }
    if (arguments.length > 2) {
      throw new Error('There must be only two argument.');
    }
    this.width = width;
    this.heigth = heigth;
  }
  perimeter() {
    return (this.width + this.heigth) * 2;
  }
  square() {
    return this.width * this.heigth;
  }
}

class Triangle {
  constructor(firstSide, secondSide, thirdSide) {
    if (typeof firstSide !== 'number'
      || typeof secondSide !== 'number'
      || typeof thirdSide !== 'number'
      || firstSide <= 0
      || secondSide <= 0
      || thirdSide <= 0) {
      throw new Error('Arguments must be a positive number.');
    }
    if (arguments.length > 3) {
      throw new Error('There must be only three argument.');
    }
    this.firstSide = firstSide;
    this.secondSide = secondSide;
    this.thirdSide = thirdSide;
  }
  perimeter() {
    return this.firstSide + this.secondSide + this.thirdSide;
  }
  square() {
    return Math.sqrt(
      this.perimeter()
      * (this.perimeter() - this.firstSide)
      * (this.perimeter() - this.secondSide)
      * (this.perimeter() - this.thirdSide));
  }
}

class Сircle {
  constructor(radius) {
    if (typeof radius !== 'number' || radius <= 0) {
      throw new Error('Argument must be a positive number.');
    }
    if (arguments.length > 1) {
      throw new Error('There must be only one argument.');
    }
    this.radius = radius;
  }
  perimeter() {
    return Math.PI * this.radius * 2;
  }
  square() {
    return Math.PI * (this.radius * this.radius);
  }
}

function Rectangle(width, heigth) {
  if (typeof width !== 'number'
    || typeof heigth !== 'number'
    || width <= 0
    || heigth <= 0) {
    throw new Error('Arguments must be a positive number.');
  }
  if (arguments.length > 2) {
    throw new Error('There must be only two argument.');
  }
  this.width = width;
  this.heigth = heigth;
}
Rectangle.prototype.perimeter = function () {
  return (this.width + this.heigth) * 2;
}
Rectangle.prototype.square = function () {
  return this.width * this.heigth;
}

function Triangle(firstSide, secondSide, thirdSide) {
  if (typeof firstSide !== 'number'
    || typeof secondSide !== 'number'
    || typeof thirdSide !== 'number'
    || firstSide <= 0
    || secondSide <= 0
    || thirdSide <= 0) {
    throw new Error('Arguments must be a positive number.');
  }
  if (arguments.length > 3) {
    throw new Error('There must be only three argument.');
  }
  this.firstSide = firstSide;
  this.secondSide = secondSide;
  this.thirdSide = thirdSide;
}

Triangle.prototype.square = function () {
  return Math.sqrt(
    this.perimeter()
    * (this.perimeter() - this.firstSide)
    * (this.perimeter() - this.secondSide)
    * (this.perimeter() - this.thirdSide));
}

Triangle.prototype.perimeter = function () {
  return this.firstSide + this.secondSide + this.thirdSide;
}

function Сircle(radius) {
  if (typeof radius !== 'number' || radius <= 0) {
    throw new Error('Argument must be a positive number.');
  }
  if (arguments.length > 2) {
    throw new Error('There must be only two argument.');
  }
  this.radius = radius;
}

Сircle.prototype.perimeter = function () {
  return Math.PI * this.radius * 2;
}

Сircle.prototype.square = function () {
  return Math.PI * (this.radius * this.radius);
}

//* task 8
// Вычислить факториал числа. Реализовать с помощью рекурсии. Реализовать мемоизированную функцию вычисления факториала.

function factorialNumber(number) {
  if (typeof number !== 'number' || number < 0) {
    throw new Error('Argument must be a positive number.');
  }
  if (number > 170) {
    throw new Error('You have reached the safest number possible.');
  }
  if (arguments.length > 1) {
    throw new Error('There must be only one argument.');
  }
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
}

function factorialNumberRecursion(number) {
  if (typeof number !== 'number' || number < 0) {
    throw new Error('Argument must be a positive number.');
  }
  if (number > 170) {
    throw new Error('You have reached the safest number possible.');
  }
  if (arguments.length > 1) {
    throw new Error('There must be only one argument.');
  }
  if (number === 1) {
    return 1;
  }
  return number * factorialNumberRecursion(number - 1);
}

const memoFactorial = (function () {
  const memo = {};
  return function factorial(num) {
    if (typeof num !== 'number' || num < 0) {
      throw new Error('Argument must be a positive number.');
    }
    if (num > 170) {
      throw new Error('You have reached the safest number possible.');
    }
    if (arguments.length > 1) {
      throw new Error('There must be only one argument.');
    }
    if (num in memo) {
      return memo[num];
    }
    if (num === 0 || num === 1) {
      return 1;
    }
    let result = factorial(num - 1);
    memo[num] = result;
    return num * memo[num];
  };
})();

//* task 9
// Посчитать сумму всех элементов массива, только тех которые (Кратные двум, кратные трем, которые только положительные и нечетные), реализовать с помощью рекурсии для одномерного массива.

function sumNumbers(array, callback) {
  if (!Array.isArray(array) || typeof callback !== 'function') {
    throw new Error('Array must be array, callback must be a function.');
  }
  if (arguments.length > 2) {
    throw new Error('There must be only two argument.');
  }
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'number') {
      throw new Error('Elements must be only numbers.');
    }
    if (callback(array[i])) {
      sum += array[i];
    }
  }
  return sum;
}

function sumNumbersRecursion(array, callback, sum, index) {
  if (!Array.isArray(array) || typeof callback !== 'function') {
    throw new Error('Array must be array, callback must be a function.');
  }
  sum = sum || 0;
  index = index || 0;
  if (index < array.length) {
    if (typeof array[index] !== 'number') {
      throw new Error('Elements must be only numbers.');
    }
    if (callback(array[index])) {
      sum += array[index];
    }
    return sumNumbersRecursion(array, callback, sum, ++index);
  }
  return sum;
}

//* task 10
// Посчитать количество элементов массива которые (Нулевые, отрицательные, положительные, простые числа)

const checkIsSimpleNum = (num) => (num > 2 && num % 2 === 0) ? false : num > 1;

function countNumbers(array, callback) {
  if (!Array.isArray(array) || typeof callback !== 'function') {
    throw new Error('Array must be array, callback must be a function.');
  }
  if (arguments.length > 2) {
    throw new Error('There must be only two argument.');
  }
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'number') {
      throw new Error('Elements must be only numbers.');
    }
    if (callback(array[i])) {
      result++;
    }
  }
  return result;
}

//* task 11
// Написать функции которые преобразовывают число из десятичной системы счисления в двоичную и в обратную сторону. (Достаточно написать для целых положительных чисел)

function transformBinary(number) {
  if (typeof number !== 'number') {
    throw new Error('Argument must be a positive number.');
  }
  if (arguments.length > 1) {
    throw new Error('There must be only one argument.');
  }
  let result = '';
  while (number > 0) {
    let temp = number % 2;
    result = temp + result;
    number = Math.floor(number / 2);
  }
  return result;
}

function trasformDecimal(str) {
  if (typeof str !== 'string') {
    throw new Error('Argument must be a string.');
  }
  if (arguments.length > 1) {
    throw new Error('There must be only one argument.');
  }
  let result = 0;
  let length = str.length;
  for (let i = 0; i < str.length; i++) {
    result += str[i] * 2 ** (--length);
  }
  return result;
}

//* task 12
// Пункты 9 и 10 выполнить для двумерных массивов.
//* task 12.9

function sumNumbersMatrix(array, callback) {
  if (!Array.isArray(array) || typeof callback !== 'function') {
    throw new Error('Array must be array, callback must be a function.');
  }
  if (arguments.length > 2) {
    throw new Error('There must be only two argument.');
  }
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      throw new Error('Must be a two-dimensional array.');
    }
    for (let j = 0; j < array[i].length; j++) {
      if (callback(array[i][j])) {
        sum += array[i][j];
      }
    }
  }
  return sum;
}

//* task12.10

function сountNumbersMatrix(array, callback) {
  if (!Array.isArray(array) || typeof callback !== 'function') {
    throw new Error('Array must be array, callback must be a function.');
  }
  if (arguments.length > 2) {
    throw new Error('There must be only two argument.');
  }
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      throw new Error('Must be a two-dimensional array.');
    }
    for (let j = 0; j < array[i].length; j++)
      if (callback(array[i][j])) {
        result++;
      }
  }
  return result;
}

//* task 13
// Посчитать сумму значений чисел от min до max (всех, только тех которые кратны 3, только положительные). Нарисовать блок схему. Реализовать также с помощью рекурсии.

// https://github.com/Mykhailo-Bondarenko/block-one/blob/master/task%2013.jpg

function sumNumbersRange(min, max, callback) {
  if (min > max) {
    throw new Error('Min must be smaller than max.');
  }
  if (arguments.length > 3) {
    throw new Error('There must be only three argument.');
  }
  if (typeof min !== 'number'
    || typeof max !== 'number'
    || typeof callback !== 'function'
    || min <= 0
    || max <= 0) {
    throw new Error('Min,max must be posivite numbers,callback a function.');
  }
  let sum = 0;
  for (let i = min; i <= max; i++) {
    if (callback(i)) {
      sum += i;
    }
  }
  return sum;
}

function sumNumbersRangeRecursion(min, max, callback, sum) {
  if (min > max) {
    throw new Error('Min must be smaller than max.');
  }
  if (typeof min !== 'number'
    || typeof max !== 'number'
    || typeof callback !== 'function'
    || min <= 0
    || max <= 0) {
    throw new Error('Min,max must be posivite numbers,callback a function.');
  }
  sum = sum || 0;
  while (min <= max) {
    if (callback(min)) {
      sum += min;
    }
    return sumNumbersRangeRecursion(++min, max, callback, sum);
  }
  return sum;
}

//* task 14
// Найти среднее значение всех элементов одномерного/двумерного массива (Среднее только тех которые четные и которые не четные).

function averageNumber(array, callback) {
  if (!Array.isArray(array) || typeof callback !== 'function') {
    throw new Error('Array must be array, callback must be a function.');
  }
  if (arguments.length > 2) {
    throw new Error('There must be only two argument.');
  }
  let result = 0;
  let counter = 0;
  if (array.length < 1) {
    return result;
  }
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'number') {
      throw new Error('Elements must be only numbers.');
    }
    if (callback(array[i])) {
      result += array[i];
      counter++;
    }
  }
  return result / counter;
}

function averageNumberMatrix(array, callback) {
  if (!Array.isArray(array) || typeof callback !== 'function') {
    throw new Error('Array must be array, callback must be a function.');
  }
  if (arguments.length > 2) {
    throw new Error('There must be only two argument.');
  }
  let result = 0;
  if (array.length < 1) {
    return result;
  }
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      throw new Error('Must be a two-dimensional array.');
    }
    if (array[i].length < 1) {
      continue;
    }
    for (let j = 0; j < array[i].length; j++) {
      if (callback(array[i][j])) {
        result += array[i][j];
        counter++;
      }
    }
  }
  if (counter === 0) {
    return result;
  }
  return result / counter;
}

//* task 15
// Транспонировать матрицу, сложить две матрицы.

function transposeMatrix(array) {
  if (!Array.isArray(array)) {
    throw new Error('Array must be array.');
  }
  if (array.length === 0) {
    throw new Error('Array must have any numerical values.');
  }
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      throw new Error('Must be a two-dimensional array.');
    }
    if (array[i].length < 1) {
      throw new Error('Array must have any numerical values.');
    }
    if (array[i].length !== array.length) {
      throw new Error('Array must be a square matrix.');
    }
    result[i] = [];
    for (let j = 0; j < array.length; j++) {
      if (typeof array[i][j] !== 'number') {
        throw new Error('Elements must be only a number.');
      }
      result[i][j] = array[j][i];
    }
  }
  return result;
}

function sumTwoMatrix(arrayOne, arrayTwo) {
  if (!Array.isArray(arrayOne)
    || !Array.isArray(arrayTwo)
    || arrayOne.length !== arrayTwo.length) {
    throw new Error('Arrays must be arrays, with same length.');
  }
  let result = [];
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i].length < 1 || arrayTwo[i].length < 1) {
      throw new Error('Arrays must have any numerical values.');
    }
    if (!Array.isArray(arrayOne[i]) || !Array.isArray(arrayTwo[i])) {
      throw new Error('Must be a two-dimensional arrays.');
    }
    result[i] = [];
    for (let j = 0; j < arrayOne[0].length; j++) {
      if (typeof arrayOne[i][j] !== 'number'
        || typeof arrayTwo[i][j] !== 'number') {
        throw new Error('Elements must be only a number.');
      }
      result[i][j] = arrayOne[i][j] + arrayTwo[i][j];
    }
  }
  return result;
}

// * task 16 
// Удалить из двумерного массива строку в которой присутствует хотя бы один нулевой элемент. Для столбца аналогично реализовать.

function deleteRowMatrix(array, callback) {
  if (!Array.isArray(array) || typeof callback !== 'function') {
    throw new Error('Array must be array, callback must be a function.');
  }
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      throw new Error('Must be a two-dimensional arrays.');
    }
    for (let j = 0; j < array[i].length; j++) {
      if (callback(array[i][j])) {
        array.splice(i, 1);
        i--;
        break;
      }
    }
  }
  return array;
}

function deleteColumnMatrix(array, callback) {
  if (!Array.isArray(array) || typeof callback !== 'function') {
    throw new Error('Array must be array, callback must be a function.');
  }
  let result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (callback(array[i][j])) {
        for (let k = 0; k < array.length; k++) {
          array[k].splice(j, 1);
          if (array[k].length < 1) {
            return result;
          }
        }
      }
    }
  }
  return array;
}

//* task 17

// Посчитать сумму / количество нулевых элементов / среднее значение элементов матрицы над и под главной диагональю и на главной диагонали.

function findElementsDiagonal(array) {
  if (!Array.isArray(array)) {
    throw new Error('Array must be array.');
  }
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length !== array.length) {
      throw new Error('Array must be a square matrix.');
    }
    if (typeof array[i][i] !== 'number') {
      throw new Error('Elements must be only a number.');
    }
    result.push(array[i][i]);
  }
  return result;
}

function findElementsAboveDiagonal(array) {
  if (!Array.isArray(array)) {
    throw new Error('Array must be array.');
  }
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length !== array.length) {
      throw new Error('Array must be a square matrix.');
    }
    for (let j = i + 1; j < array[i].length; j++) {
      if (typeof array[i][j] !== 'number') {
        throw new Error('Elements must be only a number.');
      }
      result.push(array[i][j]);
    }
  }
  return result;
}

function findElementsUnderDiagonal(array) {
  if (!Array.isArray(array)) {
    throw new Error('Array must be array.');
  }
  const result = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i].length !== array.length) {
      throw new Error('Array must be a square matrix.');
    }
    for (let j = 0; j < i; j++) {
      if (typeof array[i][j] !== 'number') {
        throw new Error('Elements must be only a number.');
      }
      result.push(array[i][j]);
    }
  }
  return result;
}

function findSumElements(array) {
  if (!Array.isArray(array)) {
    throw new Error('Array must be array.');
  }
  let sum = 0;
  for (let i = 0; i < array.length; i++) {

    if (typeof array[i] !== 'number') {
      throw new Error('Elements must be only a number.');
    }
    sum += array[i];
  }
  return sum;
}

function findAmountElements(array, callback) {
  if (!Array.isArray(array) || typeof callback !== 'function') {
    throw new Error('Array must be array and callback a function.');
  }
  let amount = 0;
  for (let i = 0; i < array.length; i++) {

    if (typeof array[i] !== 'number') {
      throw new Error('Elements must be only a number.');
    }
    if (callback(array[i])) {
      amount++;
    }
  }
  return amount;
}

function findAverageElements(array) {
  if (!Array.isArray(array)) {
    throw new Error('Array must be array.');
  }
  let sum = 0;
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'number') {
      throw new Error('Elements must be only a number.');
    }
    sum += array[i];
    counter++;
  }
  return sum / counter;
}

//* task 18
// Создать итерируемый объект, который на каждой итерации возвращает следующее значение числа фибоначчи (Реализовать с помощью итератора и генератора). Реализовать мемоизированную функцию. Реализовать с помощью рекурсии.

function numbersFibonacci() {
  let numOne = 0;
  let numTwo = 1;
  const max = Number.MAX_SAFE_INTEGER;
  return {
    next() {
      let nextNumber = (numTwo === 0) ? 1 : numOne + numTwo;
      let prevNumber = numTwo;
      numTwo = nextNumber;
      numOne = prevNumber;
      let flag = false;
      if (nextNumber >= max) {
        nextNumber = undefined;
        flag = true;
      }
      return { value: nextNumber, done: flag };
    }
  };
}

function numberFibonacciRecursion(num) {
  if (typeof num !== 'number' || num < 0) {
    throw new Error('Num must be a positive number.');
  }
  if (num === 0 || num === 1) {
    return 1;
  }
  return numberFibonacciRecursion(num - 1)
    + numberFibonacciRecursion(num - 2);
}

function numberFibonacci(num) {
  if (typeof num !== 'number' || num < 0) {
    throw new Error('Num must be a positive number.');
  }
  let numOne = 0;
  let numTwo = 1;
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = numOne + numTwo;
    numOne = numTwo;
    numTwo = result;
  }
  return result;
}

const memoFibonacci = (function () {
  const memo = {};
  return function func(num) {
    if (typeof num !== 'number' || num < 0) {
      throw new Error('Argument must be a positive number.');
    }
    let result;
    if (num in memo) {
      return memo[num];
    }
    if (num === 0 || num === 1) {
      return 1;
    }
    result = func(num - 1) + func(num - 2);
    memo[num] = result;
    return result;
  }
})();

//* task 19
// Реализовать с помощью итератора и генератора светофор. При каждой следующей итерации мы должны получать следующий корректный цвет по логике светофора.

const trafficColors = {
  colors: ['red', 'yellow', 'green', 'yellow'],
  [Symbol.iterator]() {
    return {
      colors: this.colors,
      temp: 0,
      next() {
        if (this.temp === this.colors.length) {
          this.temp = 0;
        }
        if (this.temp <= this.colors.length) {
          return { value: this.colors[this.temp++], done: false, };
        }
      },
    };
  },
};

function* generateTrafficColors() {
  while (true) {
    yield 'red';
    yield 'yellow';
    yield 'green';
    yield 'yellow';
  }
}

//* task 20
// Определить является ли число отрицательным или положительным без сравнения на больше/меньше нуля (побитово). Посчитать количество битов числа которые установлены в единицу и которые установлены в 0. Написать свою реализацию для ~, двумя способами).


function checkIsPositive(number) {
  if (typeof number !== 'number') {
    throw new Error('Number must be a number.');
  }
  return !(number >> 31);
}

function calculateСountBits(number) {
  if (typeof number !== 'number') {
    throw new Error('Number must be a number.');
  }
  const result = {};
  result.one = 0;
  result.zero = 0;
  for (let i = 0; i < 32; i++) {
    if ((number & (1 << i)) === (1 << i)) {
      result.one++;
    }
    result.zero = 32 - result.one;
  }
  return result;
}

function bitwiseNotSimple(number) {
  if (typeof number !== 'number') {
    throw new Error('Number must be a number.');
  }
  return -(number + 1);
}

function bitwiseNot(number) {
  if (typeof number !== 'number') {
    throw new Error('Number must be a number.');
  }
  for (let i = 0; i < 32; i++) {
    number ^= (1 << i);
  }
  return number;
}