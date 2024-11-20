/* Задание 1: "Получение данных о пользователе"
Реализуйте асинхронную функцию для получения данных о пользователе с удаленного
сервера:
Функция getUserData
● Описание:
1. Функция принимает идентификатор пользователя (ID) в качестве
аргумента и использует fetch для получения данных с удаленного
сервера.
2. Функция возвращает промис, который разрешается с объектом данных о
пользователе, если запрос был успешным.
3. Если пользователь с указанным ID не найден, промис должен быть
отклонен с соответствующим сообщением об ошибке.
● Последовательность действий:
1. Вызовите fetch, передав URL с нужным ID пользователя.
2. Если ответ успешен (код 200), извлеките данные с помощью
response.json().
3. Верните объект с данными о пользователе.
4. Если ответ не успешен, отклоните промис с сообщением об ошибке.
 */

async function getUserData(userId) {
  const url = `https://jsonplaceholder.typicode.com/users`; 

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch users. Status: ${response.status}`);
    }

    const users = await response.json(); 

    
    const user = users.find(user => user.id === userId);

    if (!user) {
      throw new Error(`User with ID ${userId} not found.`);
    }

    return user; 
  } catch (error) {
    return Promise.reject(error.message);
  }
}


getUserData(1)
  .then(user => console.log('User data:', user))
  .catch(error => console.error('Error:', error));

/* Задание 2: "Отправка данных на сервер"
Реализуйте функцию для отправки данных о пользователе на сервер:
Функция saveUserData
● Описание:
○ Функция принимает объект с данными о пользователе и использует
fetch для отправки данных на удаленный сервер.
○ Функция возвращает промис, который разрешается, если данные
успешно отправлены.
○ Если запрос неуспешен, промис должен быть отклонен с
соответствующим сообщением об ошибке.
● Подсказка:
○ Используйте метод POST и задайте заголовок Content-Type как
application/json.
○ Объект с данными о пользователе необходимо сериализовать в
JSON-строку с помощью JSON.stringify(). */

async function saveUserData(userData) {
  const url = `https://jsonplaceholder.typicode.com/users`; 

  try {
    const response = await fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData), 
    });

    if (!response.ok) {
      throw new Error(`Failed to save user data. Status: ${response.status}`);
    }

    const result = await response.json(); 
    return result; 
  } catch (error) {
    return Promise.reject(error.message); 
  }
}
const user = {
name: 'John Smith',
age: 30,
email: 'john@example.com'
};
saveUserData(user)
.then(() => {
console.log('User data saved successfully');
})
.catch(error => {
console.error(error);
});

/* Задание 3: "Изменение стиля элемента через заданное время"
Реализуйте функцию, которая изменяет стиль элемента с задержкой:
Функция changeStyleDelayed
● Описание:
○ Функция принимает идентификатор элемента (id) и время задержки в
миллисекундах (delay).
○ После истечения времени задержки, функция должна изменить стиль
элемента.
 */

function changeStyleDelayed(id, delay) {
  
  setTimeout(() => {
    
    const element = document.getElementById(id);

    if (element) {
      
      element.style.backgroundColor = 'lightblue';
      element.style.color = 'darkblue';
      element.style.padding = '10px';
      element.style.borderRadius = '5px';
      console.log(`Style of element with id "${id}" has been changed.`);
    } else {
      console.error(`Element with id "${id}" not found.`);
    }
  }, delay);
}
changeStyleDelayed('myElement', 2000);