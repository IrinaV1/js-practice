// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// let styles = ['jazz', 'blues'];
// styles.push('rock-n-roll');
//let index = styles.indexOf('blues');
// styles[index] = 'classic';
// console.log(styles);


// function logItems(array) {
//   for (let index = 0; index < array.length; index++) {
// console.log(`${index + 1} - ${array[index]}`);
//   }
// }
// console.log(logItems(styles));




//2    Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".
//  const logins = ["Peter", "John", "Igor", "Sasha"];


// function checkLogin(array) {
//   let userName = prompt("Напишіть ім'я");
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === userName) {
//       return alert(`Welcome, ${userName}!`)
//     } else {
//       return "User not found";
//     }

//   }
// }
// console.log(checkLogin(logins));

// 3
// Напишіть функцію calculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function calculateAverage() {
//   let total = 0;
// let count = 0;
//   for (const arg of arguments) {
//     if (typeof arg === 'number') {
//       total += arg;
//       count++;
//     }
//   }
// count > 0 ? total / count : 0;
//   return total;

// }
// console.log(calculateAverage(1, 5,8));

// 4
// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// function newArrays(array) {
//   let newArray = [];
//  for (let index = 0; index < array.length - 1; index++) {
//  let total = array[index] + array[index + 1];
//    newArray.push(total);
//  }
//   return newArray;
// }
// console.log(newArrays(someArr));

// 5
// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
// function findSmallestNumber(numbers) {
//   if (Array.isArray(numbers)) {
//     return Math.min(...numbers);
//   } else {
//     return 'Sory, it is not an array!';
//   }
// }

// console.log(findSmallestNumber(numbers));

// 6
// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'
// function findLongestWord(string) {
//   let array = string.split(" ");

//   let longWord = array[0];
//   for (let i = 0; i < array.length; i++) {
//     if (longWord.length < array[i].length) {
//       longWord = array[i];
//     }
//   }

//   return longWord;

// }
// console.log(findLongestWord("London is the capital of Great Britain"));

// 7
// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
//   };


// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
// };
// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;
// let keys = Object.keys(user);
// for (const key of keys) {
//  `${key}:${user[key]}`;

// }
// console.log(user);


// 8
// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0
// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
//   };

//  const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
// };
// let sum = 0;
// let keys = Object.keys(salaries);
// for (const key of keys) {
//     sum += salaries[key];
// }
// console.log(sum);


// 9
// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність
// властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою
// на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

// const calculator = {
//   read(a, b) {
//     this.value1 = a;
//     this.value2 = b;
//   },
//   exist() {
//     this.value1 !== undefined && this.value2 !== undefined;
//   },
//   sum() {
//     if (this.exist) {
//      return this.value1 + this.value2;
//     } else {
//      return 'No such propeties';
//     }
//   },
//   mult() {
//     if (this.exist) {
//      return this.value1 * this.value2;
//     } else {
//      return 'No such propeties';
//     }
//   }
// }
// calculator.read(3, 5);

// console.log(calculator.sum());  // 8
// console.log(calculator.mult()); // 15

// 10
// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.
// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.
// const fruits = [
//     { name: "Яблуко", price: 45, quantity: 7 },
//     { name: "Апельсин", price: 60, quantity: 4 },
//     { name: "Банан", price: 125, quantity: 8 },
//     { name: "Груша", price: 350, quantity: 2 },
//     { name: "Виноград", price: 440, quantity: 3 },
//     { name: "Банан", price: 125, quantity: 3 },
//   ];



// function calcTotalPrice(fruits, fruitName) {
//   let total = 0;
//   for (const element of fruits) {
//     if (fruitName === element.name) {
//       total += element.price * element.quantity;
//     }
//   }
//   return total;
// }
// console.log(calcTotalPrice(fruits, "Груша"));



//11 Створіть телефонну книгу - об'єкт phonebook,
// у якого є властивість contacts (список контактів)
// та методи управління книгою:
// add(data) - приймає об'єкт data, де зберігається
// name, email, category, id, createdAt
// (name i email - обов'язкові параметри, які треба передавати
// при додаванні нового контакта,
// category - може передаватись чи ні, якщо ні - має
// приймати значення "default",
// id та createdAt генеруються відповідними методами:
// generateId() і getDate());
// *не забудь додати перевірку, якщо контакт з таким ім'ям чи імейлом вже є - ми його не додаємо
// list() - виводить список контактів у вигляді таблиці;
// filtered(category) - фільтрує контактів по обраній 
// категорії (друзі, робота і т.д.)
// delete(name) - видаляє контакт з заданим ім'ям;
// updateName(oldName, newName) - зиінює ім'я контакта;

const phonebook = {
    contacts: [],
    add(data) {},
    list() {},
    filtered(category) {},
    delete(name) {},
    updateName(oldName, newName) {},

    generateId() {
      return "#" + Math.random().toString(36).substr(2, 9);
    },
    getDate() {
      return Date.now();
    },
  };


phonebook.add({
  name: "Mango",
  email: "mango@mail.com",
  category: "friends",
});

phonebook.add({
  name: "Poly",
  email: "poly@hotmail.com",
});
phonebook.add({
  name: "Katy",
  email: "katy@hotmail.com",
  category: "friends",
});



// const phonebook = {
//   contacts: [],
//   add(data) {
//     this.contacts.push({
//       name: data.name,
//       email: data.email,
//       category: data.category || 'default',
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     });
//   },
//   list() {
//     console.table(this.contacts);
//   },
//   filtered(category) {
//     const arr = [];
//     for (const contact of this.contacts) {
//       if (contact.category === category) {
//         arr.push(contact);
//       }
//     }
//     return arr;
//   },
//   delete(name) {
//     for (const contact of this.contacts) {
//       if (name === contact.name) {
//         const index = this.contacts.indexOf(contact);
//         this.contacts.splice(index, 1);
//       }
//     }
//   },
//   updateName(oldName, newName) {
//     for (const contact of this.contacts) {
//       if (oldName === contact.name) {
//         contact.name = newName;
//       }
//     }
//   },

//   generateId() {
//     return '#' + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// phonebook.add({
//   name: 'Mango',
//   email: 'mango@mail.com',
//   category: 'friends',
// });

// phonebook.add({
//   name: 'Poly',
//   email: 'poly@hotmail.com',
// });
// phonebook.add({
//   name: 'Katy',
//   email: 'katy@hotmail.com',
//   category: 'friends',
// });

// phonebook.delete('Mango');
// phonebook.updateName('Poly', 'Jack');
// phonebook.list();
