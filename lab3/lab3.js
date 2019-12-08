// node app.js --id=3 --city=bialystok

//const request = require("request");
const argv = require("yargs").argv;
const userId = argv.id;
const persons = require("./person.js");

const url2 = `https://jsonplaceholder.typicode.com/users/${userId}`;
persons(url2);

// request(url2, (error, response, body) => {
//   if (!error && response.statusCode === 200) {
//     const user = JSON.parse(body);
//     console.log(user.name);
//     console.log("lat", user.address.geo.lat);
//     console.log("lng", user.address.geo.lng);
//     //-----------------------------------
//     const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${user.address.geo.lat}&lon=${user.address.geo.lng}`;
//     request(url, (error, response, body) => {
//       if (!error && response.statusCode === 200) {
//         // parsujemy naszą odpowiedź do obiektu JS
//         const weather = JSON.parse(body);
//         // wyświetlamy temperaturę
//         console.log("temperatura", weather.main.temp);
//       } else {
//         // jeżeli zmienna `error` nie będzie pusta lub `statusCode` zwróci inny kod niż 200 wtedy informujemy o błędzie
//         console.log("błąd pobierania danych");
//       }
//     });
//     //-----------------
//   } else {
//     console.log("User not found");
//   }
// });

/*1 Stwórzmy pierwszą aplikację z wykorzystaniem Promise. Zadaniem jest stworzeniem funkcji 
zwracającej Promise któym rozwiązaniem ma być wartość hello world.*/

// const helloPromise = new Promise((resolve, reject) => resolve("Hello world"));

// helloPromise.then(text => {
//   console.log(text);
// });

/* 2 Zmodyfikuj zadanie 1 tak aby rozwiązanie Promise było asynchroniczne. Wykorzystajmy do tego celu 
funkcję setTimeout z 5 sekundowym opóźnieniem. */

// const helloPromise = new Promise((resolve, reject) =>
//   //setTimeout(resolve, 5000, "Hello world")
//   setTimeout(() => resolve("Hello world"), 5000)
// );
// helloPromise.then(text => {
//   console.log(text);
// });

/*  3 Zadaniem kolejnym jest stworzenie funkcji odejmowania 2 licz z wykorzystaniem Promise. 
Stwórzmy regułę jeżeli wynik działania będzie ujemny Promise powinien zwrócić błąd, 
jeżeli wynik jest dodatni Promise powinien się rozwiązać poprawnie przekazując wynik działania. */

// const sub = (a, b) => {
//   let result = a - b;
//   return new Promise((resolve, reject) => {
//     result > 0
//       ? resolve(result)
//       : reject(`Błąd. Wynik odejmowania jest ujemny i wynosi ${result}`);
//   });
// };

// sub(3, 4)
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log(error);
//   });

/* 4  Wykorzystując wiedzę z poprzednich zajęć użyjmy zewnętrznej biblioteki request i pobierzmy 
użytkownika dane(https://jsonplaceholder.typicode.com/users/2). 
Przeróbmy tak wywołanie naszego zapytania aby wykorzystywało Promise. */
//npm init
//npm install request

// const request = require("request");

// const getUser = id => {
//   return new Promise((resolve, reject) => {
//     const url = `https://jsonplaceholder.typicode.com/users/${id}`;
//     request(url, (error, response, body) => {
//       if (!error && response.statusCode === 200) {
//         const user = JSON.parse(body);
//         resolve(user);
//       } else reject("User not found");
//     });
//   });
// };

// getUser(200)
//   .then(user => {
//     console.log(user.name);
//     console.log("lat", user.address.geo.lat);
//     console.log("lng", user.address.geo.lng);
//   })
//   .catch(error => {
//     console.log(error);
//   });
