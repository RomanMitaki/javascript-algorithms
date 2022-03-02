/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 *
 */

function intersection(arr1, arr2) {
  const arr1Filtered = arr1.filter(function (item, index) {
    return arr1.indexOf(item) === index;
  });
  const arr2Filtered = arr2.filter(function (item, index) {
    return arr2.indexOf(item) === index;
  });
  const arrFiltered = arr1Filtered.filter(function (item) {
    return arr2Filtered.includes(item);
  });
  return arrFiltered;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])); // []
