/* Задание №1
Нахождение минимального числа в массиве
Дан массив const arr = [1, 5, 7, 9]. Используя метод Math.min и оператор
распространения (spread operator), найдите минимальное число в массиве. Решение
должно быть написано в одной строке. */

const arr = [1, 5, 7, 9];
const minNumber = Math.min(...arr);
console.log(minNumber)

/* Задание №2
Создание счетчика
Напишите функцию createCounter, которая создает счетчик и возвращает объект с
тремя методами: increment, decrement и getValue. Метод increment должен
увеличивать значение счетчика на 1, метод decrement должен уменьшать значение
счетчика на 1, а метод getValue должен возвращать текущее значение счетчика.
Значение счетчика должно быть доступно только через методы объекта, а не
напрямую. */

function createCounter() {
  let counter = 0;
  return {
    increment() {
      counter++;
      return counter;
    },
    decrement() {
      counter--;
      return counter;
    },
    getValue() {
      return counter;
    }
  };
}

const counter = createCounter();

console.log(counter.increment()); 
console.log(counter.decrement()); 
console.log(counter.getValue());  


/* Задание №3
Рекурсивный поиск элемента по классу
Напишите рекурсивную функцию findElementByClass, которая принимает корневой
элемент дерева DOM и название класса в качестве аргументов и возвращает первый
найденный элемент с указанным классом в этом дереве.
 */

function findElementByClass(root, className) {
  // Проверяем, есть ли у текущего элемента указанный класс
  if (root.classList && root.classList.contains(className)) {
    return root;
  }

  // Проходим по всем дочерним элементам
  for (let child of root.children) {
    // Рекурсивно вызываем функцию для каждого дочернего элемента
    const found = findElementByClass(child, className);
    if (found) {
      return found; // Если элемент найден, возвращаем его
    }
  }

  // Если элемент не найден, возвращаем null
  return null;
}
const rootElement = document.getElementById('root'); // Например, root - корневой элемент
const className = 'target-class'; // Класс, который нужно найти
const foundElement = findElementByClass(rootElement, className);

if (foundElement) {
  console.log('Элемент найден:', foundElement);
} else {
  console.log('Элемент с указанным классом не найден.');
}