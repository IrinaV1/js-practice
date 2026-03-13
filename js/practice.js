// const name = "Mango";
// const letters = name.split("");
// console.log(letters); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript essentials";
// const words = message.split(" ");
// console.log(words); // ["JavaScript", "essentials"]

// const slug = "amazing-french-recipes";
// const slugParts = slug.split("-");
// console.log(slugParts); // ["amazing", "french", "recipes"]

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swimming", "music", "sci-fi"],
// };



// const bookShelf = {
//   books: [
// 		{ title: "The Last Kingdom", rating: 8 }, 
// 		{ title: "The Mist", rating: 6 }
// 	],
// 	getBooks() {
// 		return this.books;
// 	}
// };
// console.log(bookShelf);


// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw"
// };
// const account = {
//   //текущий баланс
//   balance: 0,
//   // история транзакций
//   transactions: [],
//   // метод создает и возвращает объект транзакций
//   // количество и тип транзакций
//   createTransaction(amount, type) { 
//     const obj = { id: amount, amount, type };
//     return obj;
//   },

//   deposit(amount) { 
//     this.balance += amount;
//         const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//  this.transactions.push(transaction);
//   },

//   withdraw(amount) { 
//     if (this.balance < amount) {
//      console.log("Поповніть рахунок");
//      return
//     }
//     this.balance -= amount;
//     const transaction = this.createTransaction(amount, Transaction.WITHDRAW);

//     this.transactions.push(transaction);
//   },

//   getBalance() { 
//     return this.balance;
//   },

//   getTransactionDetails(id) {
//     for (const element of this.transactions) {
//       if (element.id === id) {
//         return id;
//       }
//     }
//   },

//   getTransactionTotal(type) { }


// }