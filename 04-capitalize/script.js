/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
 */

function capitalize(str) {
  if (str !== String(str)) {
    return str;
  } else if (str.length === 0) {
    return str;
  } else if (str.trim() === "") {
    return str;
  } else {
    const trimStr = str.trim();
    const strArr = trimStr.split(" ");
    const filterArr = strArr.filter((item) => {
      return item !== "";
    });
    const modifiedStrArr = filterArr.map((item) => {
      return item[0].toUpperCase() + item.slice(1);
    });

    return modifiedStrArr.join(" ");
  }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize("ddddddd  ffffdf")); // "Молодость Всё Простит"
