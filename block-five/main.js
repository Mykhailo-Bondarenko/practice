"use strict";
//* task1
// Написать регулярное выражение проверки номера телефона по формату +сс(mmm)xxx-xx-xx, Где cc - код страны, mmm - код мобильного оператора, x - номер телефона
function isСorrectPhoneNumber(number) {
  return /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/.test(number);
}

//* task2
// Написать регулярное выражение проверки на email

function isCorrectEmail(email) {
  return /^[a-z\d-_]+@[a-z\d-_]+\.[a-z\d-_]+$/i.test(email);
}

//* task3
// Написать регулярное выражение проверку на сайт: http://test.dev
function isCorrectLink(link) {
  return /^https?:\/\/([a-z\d-].?){2,}$/i.test(link);
}

//* task 4
// Написать регулярное выражение проверки пароля, который должен быть минимум 6 символов, максимум 25, состоять из латинских символов и цифр, может содержать в себе знак подчеркивания

function isCorrectPassword(password) {
  return /^([a-z_\d]){6,25}$/i.test(password);
}

//* task5
// Проверить строку на валидность ipv4 адреса

function isCorrectIPV4(ipv4) {
  return /^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(ipv4);
}