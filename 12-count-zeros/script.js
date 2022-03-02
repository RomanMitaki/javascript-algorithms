/*
 * Задача 12: «Посчитать количество нулей»
 *
 * Напишите функцию countZeros(n), принимающую на вход натуральное число n.
 * Возвращать функция должна суммарное количество нулей, содержащихся во всех числах от 1 до n включительно.
 *
 */

function countZeros(n) {
  const arr = [];
  arr.length = n;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = i + 1;
  }
  const string = arr.join("");
  const stringArr = string.split("");
  const finArr = stringArr.filter((item) => {
    return item.includes(0);
  });
  return finArr.length;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(countZeros(342)); // 2 – два нуля, по одному в числах 10 и 20
console.log(countZeros(100)); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
