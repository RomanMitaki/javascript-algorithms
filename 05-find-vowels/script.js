/*
 * Задача 5: «Найти гласные»
 *
 * Напишите функцию findVowels(str), принимающую на вход кириллическую
 * строку str  и возвращающую количество гласных, содержащихся в этой строке.
 * Для вашего удобства вот массив кириллических гласных:
 *
 * ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'].
 *
 */

function findVowels(str) {
  const vowels = ["а", "я", "о", "ё", "у", "ю", "ы", "и", "э", "е"];
  const strRegistered = str.toLowerCase();
  const strArr = strRegistered.split("");
  const resoult = vowels.reduce(function (prevVal, item) {
    if (strArr.includes(item)) {
      prevVal += 1;
    }
    return prevVal;
  }, 0);
  return resoult;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(findVowels("здравствуй")); // 2
console.log(findVowels("привет")); // 2
console.log(findVowels("хеллоу")); // 3
