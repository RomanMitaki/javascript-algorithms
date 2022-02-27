/*
 * Задача 3: «Развернуть слова в предложении»
 *
 * Напишите функцию reverseWords(str), принимающую на вход строку.
 * Функция должна вернуть новую строку, расставив слова в обратном
 * порядке.Если в строке есть знаки препинания, их можно удалить
 * или оставить — на ваше усмотрение.
 *
 */

function reverseWords(str) {
  if (str !== String(str)) {
    return str;
  } else if (str.trim() === "" || str.length === 0) {
    return str;
  } else {
    const trimStr = str.trim();
    const strArr = trimStr.split(" ");
    const filterArr = strArr.filter((item) => {
      return item !== "";
    });
    const modifiedStrArr = filterArr.reverse();
    return modifiedStrArr.join(" ");
  }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(reverseWords("всегда много путей  достичь цель есть")); // "есть цель достичь путей много всегда"
console.log(reverseWords("испробовать их все должны вы")); // "вы должны все их испробовать"
