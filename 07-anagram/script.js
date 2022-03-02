/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 *
 */

function anagram(str1, str2) {
  const str1Registered = str1.toLowerCase();
  const str2Registered = str2.toLowerCase();
  const str1Arr = str1Registered.split("");
  const str2Arr = str2Registered.split("");
  if (str1Arr.join("") === str2Arr.join("")) {
    return false;
  }
  str1Arr.sort();
  str2Arr.sort();
  if (str1Arr.join("") === str2Arr.join("")) {
    return true;
  } else {
    return false;
  }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram("up", "UP")); // false
console.log(anagram("hello", "bye")); // false
