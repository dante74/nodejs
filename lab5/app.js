/*

Wykorzystując zdobytą wiedzę, stwórzmy prostą aplikację pozwalającą na przetrzymywanie 
w pliku listy zadań do wykonania (klasyczna lista TODO). Użyjmy w tym celu biblioteki 
yargs z konstrukcją command. Aplikacja powinna pozwalać na dodanie do listy nowego zadania, 
jak również wyświetlić zawartość całej listy.

Przykładowe wywołanie programu:

> node app.js dodaj "kupic mleko"
> node app.js dodaj "napisac program na zaliczenie z NodeJS"
> node app.js lista

*/

/*  zad 1


W katalogu 01 znajduje się plik user.json. Wykorzystując wiedzę z poprzednich zajęć, 
stwórzmy aplikację wczytującą naszego użytkownika z pliku i zamieńmy go na obiekt JS 
oraz wyświetlmy w konsoli jego imię.

Użyjmy w tym zadaniu funkcję readFileSync z wbudowanego modułu fs oraz funkcję JSON.parse 
do przeparsowania wczytanej zawartości do obiektu.

Zabezpieczmy naszą aplikację tak aby wyłapać błąd prasowania lub odczytu pliku i poinformujmy 
o tym użytkownika.

*/
// const fs = require("fs");
// let content;

// try {
//   content = fs.readFileSync("user.json");
// } catch (e) {
//   console.log("Błąd odczytu pliku. Sprawdż czy plik istnieje.");
// }

// try {
//   const user = JSON.parse(content);
//   console.log(user);
// } catch (e) {
//   console.log("Błąd parsowania pliku json");
// }

/*  zad 2

    Stwórzmy aplikację która będzie posiadała funkcję dzielenia 2 liczb.

Jak wiadomo JS jest ciekawym językiem, który pozwala dzielić przez 0... efektem 
dzielenia przez zero jest wartość Infinity, np.:

const result = 2 / 0;
console.log(result); // => Infinity

Zabezpieczmy naszą aplikację tak aby funkcja dzielenia rzucała wyjątkiem w przypadtku 
gdy drugi parametr ma wartość 0 (np. new Error('divide by 0')).

Oczywiście stwórzmy przykładowe wywołanie naszej funkcji z blokiem try..catch.
*/

// const div = function(a, b) {
//   try {
//     if (b == 0) {
//       throw new Error("divide by 0");
//     } else {
//       console.log("Wynik dzielenia wynosi : ", a / b);
//     }
//   } catch (e) {
//     console.log(e);
//   }
// };

// div(2, 0);

//Blok warunkowy catch kontroluje drogę dobierając odpowiedni uchwyt wyjątku.
//https://developer.mozilla.org/pl/docs/Web/JavaScript/Guide/Obsolete_Pages/Przewodnik_po_j%C4%99zyku_JavaScript_1.5/Instrukcje_obs%C5%82ugi_wyj%C4%85tk%C3%B3w/Instrukcja_try...catch

// function getCustInfo(name, id, email);

// try {
//     // funkcja wyrzucająca trzy wyjątki
//        getCustInfo("Lee", 1234, "lee@netscape.com")
//     }

//     catch (e if e == "InvalidNameException") {
//     // nazwa uchwytu dla niepoprawnej nazwy
//        bad_name_handler(e)
//     }

//     catch (e if e == "InvalidIdException") {
//     // nazwa uchwytu dla błędnych id
//        bad_id_handler(e)
//     }

//     catch (e if e == "InvalidEmailException") {
//     // nazwa uchwytu dla błednego adresu email
//        bad_email_handler(e)
//     }

//     catch (e){
//     // nie wiadomo co robi, ale się loguje
//        logError(e)
//     }

/*  zad 3


    Wykorzystując składnię async stwórzmy funkcję zwracającą nasz pierwszy Promise i 
    wyświetlmy na ekranie hello world!.

// my func ... etc...

myFunc()
    .then(result => {
        console.log(result);
    });
*/

// async function myFunc() {
//   const data = "Hello World";
//   return data;
// }

// myFunc().then(result => console.log(result));

/*  zad 4

    Stwórzmy aplikację która będzie posiadała funkcję asynchroniczną dodawnia 2 liczb 
    do siebie (async). Jeżeli wynik będzie liczbą parzystą powinniśmy wyrzucić błąd i 
    poinformować użytkownika o tym fakcie.

// my func ... etc...


add(4, 5)
    .then( ... )
    .catch( ... );
*/

// async function add(a, b) {
//   let promise = new Promise((resolve, reject) => {
//     const data = a + b;
//     if (data % 2 == 0) {
//       reject("Wynik jest liczbą parzystą");
//     } else {
//       resolve(data);
//     }
//   });
//   return promise;
// }

// add(4, 5)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

/*  zad 5
    Zmodyfikujmy nasze zadanie 4 tak aby zamiast .then..catch użyć await
*/

// async function add(a, b) {
//   const data = a + b;
//   if (data % 2 == 0) {
//     await Promise.reject(new Error("Wynik jest liczbą parzystą"));
//   } else {
//     console.log(data);
//   }
// }

// add(4, 4);

/*
    zad 6
    

    Wykorzystując wiedzę z poprzednich zajęć użyjmy zewnętrznej biblioteki axios i 
    pobierzmy użytkownika dane wykorzystując składnię async/await.

    Endpoint do użytkownika: https://jsonplaceholder.typicode.com/users/2

*/

// const axios = require("axios");

// async function getData() {
//   const user = await axios.get("https://jsonplaceholder.typicode.com/users/2");
//   console.log(user.data.name);
// }

// getData().catch(() => console.log("Błąd odczytu danych"));

// Materiały :
// https://devenv.pl/async-await-podstawy-jezyka-javascript/
// https://kursjs.pl/kurs/es6/async-await.php
