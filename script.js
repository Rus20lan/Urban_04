import greet from './modules/greet.js';
import { celsiusToFahrenheit } from './modules/celsius.js';
import calculateFallDistance from './modules/distance.js';
import calculateAverage from './modules/аverage.js';
import concatStrings from './modules/concat.js';

// Задача №1
let myName = 'Ruslan';
greet(myName);
// Задача №2
const celsius = +prompt('Укажите температуру в градусах цельсия ° C', '');
if (!Number.isNaN(celsius)) {
  alert(
    `Задача №2\nТемпература по Фаренгейту °F: ${celsiusToFahrenheit(celsius)}`
  );
} else {
  alert('Указаны неверные данные');
}
// Задача №3
const tFall = +prompt('Укажите время падения объекта в секундах', '');
if (!Number.isNaN(tFall)) {
  alert(
    `Задача №3\nРастояние падения объекта в метрах: ${calculateFallDistance(
      tFall
    )}`
  );
} else {
  alert('Указаны неверные данные');
}
// Задача №4
let answer = prompt('Укажите 3 числа через пробел', '');
if (answer !== null) {
  let [num1, num2, num3] = answer.split(' ').map((el) => +el);
  if (![num1, num2, num3].includes(NaN)) {
    alert(
      `Задача №4\nСреднее значение трех чисел ${num1}, ${num2}, ${num3} = ${calculateAverage(
        num1,
        num2,
        num3
      )}`
    );
  } else {
    alert('Необходимо указать числа');
  }
} else {
  alert('Указаны неверные данные');
}

// Задача №5
let [word1, word2] = prompt('Укажите два слова через пробел', '').split(' ');
alert(concatStrings(word1, word2));
