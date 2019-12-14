/* zad 7
Dodajmy do zadania 5 zapis całego obiektu pogody do pliku wykorzystując wbudowany 
moduł fs i funkcję writeFile. Oczywiście zadanie polega na odpowiednim dostosowaniu 
funkcji aby obsługiwała Promise. */

// const request = require("request");
// const fs = require("fs");

// const getUser = id => {
//   const url = `https://jsonplaceholder.typicode.com/users/${id}`;
//   return new Promise((resolve, reject) => {
//     request(url, (error, response, body) => {
//       if (!error && response.statusCode === 200) {
//         const user = JSON.parse(body);
//         resolve(user);
//       } else {
//         reject("User not found");
//       }
//     });
//   });
// };

// const getWeather = (lat, lng) => {
//   const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
//   return new Promise((resolve, reject) => {
//     request(url, (error, response, body) => {
//       if (!error && response.statusCode === 200) {
//         const data = JSON.parse(body);
//         resolve(data);
//       } else {
//         reject("Weather not found");
//       }
//     });
//   });
// };

// getUser(2)
//   .then(user => {
//     console.log(user.name);
//     return getWeather(user.address.geo.lat, user.address.geo.lng);
//   })
//   .then(weather => {
//     console.log(weather.main.temp);
//     return weather;
//   })

//   .then(weather => {
//     fs.writeFile("data.json", JSON.stringify(weather), () => {
//       console.log("plik został zapisany");
//     });
//   })
//   .catch(error => {
//     console.log(error);
//   });

/*   zad 8

    Jak wiadomo świat JS jest bardzo rozbudowany i nie trzeba 
    za każdym razem tworzyć od nowa konstrukcji asynchronicznych żądań do serwera. 
    Są od tego biblioteki😊 Na stronie https://npmjs.org możemy znaleźć dużo różnych 
    implementacji bibliotek które udostępniają już gotowe obiekty przystosowane do Promise, 
    np.:
    axios (https://www.npmjs.com/package/axios)
    request-promise (https://www.npmjs.com/package/request-promise)

Zadaniem 8 jest wykorzystanie biblioteki axios. Z zadania 7 podmieńmy request wraz z naszymi 
Promise na użycie biblioteki axios. */

// const request = require("request");
// const fs = require("fs");
// const axios = require("axios");

// const getUser = id => {
//   const url = `https://jsonplaceholder.typicode.com/users/${id}`;
//   return axios.get(url);
// };

// const getWeather = (lat, lng) => {
//   const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
//   return axios.get(url);
// };

// getUser(2)
//   .then(user => {
//    console.log(user.data.name);
//     return getWeather(user.data.address.geo.lat, user.data.address.geo.lng);
//   })
//   .then(weather => {
//     console.log(weather.data.main.temp);
//     return weather.data;
//   })

//   .then(weather => {
//     fs.writeFile("data.json", JSON.stringify(weather), () => {
//       console.log("plik został zapisany");
//     });
//   })
//   .catch(error => {
//     console.log("Brak danych", error);
//   });

/*  zad 9
Zamieńmy również z zadania 8 opakowanie funkcji writeFile która została zaimplementowana na 
wbudowany mechanizm w NodeJS zamieniający naszą funkcję zwrotną na Promise. 
W tym celu powinniśmy wykorzystać wbudowany moduł util i funkcję util.promisify(link do opisu)
*/

// const fs = require("fs");
// const axios = require("axios");
// const util = require("util");

// const getUser = id => {
//   const url = `https://jsonplaceholder.typicode.com/users/${id}`;
//   return axios.get(url);
// };

// const getWeather = (lat, lng) => {
//   const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
//   return axios.get(url);
// };

// getUser(2)
//   .then(user => {
//     console.log(user.data.name);
//     return getWeather(user.data.address.geo.lat, user.data.address.geo.lng);
//   })
//   .then(weather => {
//     console.log(weather.data.main.temp);
//     return weather.data;
//   })

//   .then(weather => {
//     const writeFile = util.promisify(fs.writeFile);
//     writeFile("some-file.txt", JSON.stringify(weather))
//       .then(() => {
//         console.log("file saved");
//       })
//       .catch(error => {
//         console.log("error saving file", error);
//       });
//   })
//   .catch(error => {
//     console.log("Brak danych", error);
//   });

/*  zad 10


    Stwórzmy aplikację która pobierze informacje o użytkowniku oraz jego pierwszym na liście 
    albumie i przypisanych do niego zdjęciach.

    Z pobranego użytkownika wyświetlmy na ekranie nazwę użytkownika.
    Z pobranego albumu wyświetlmy ilość wszystkich albumów oraz nazwę pierwszego z nich.
    Z pobranych zdjęć wyświetlmy wszystkie tytuły.

Lista adresów do API

    endpoint do użytkownika: https://jsonplaceholder.typicode.com/users/1
    endpoint do albumów: https://jsonplaceholder.typicode.com/albums?userId=1
    endpoint do zdjęć: https://jsonplaceholder.typicode.com/photos?albumId=1

*/

// const fs = require("fs");
// const axios = require("axios");
// const util = require("util");

// const getUser = id => {
//   const url = `https://jsonplaceholder.typicode.com/users/${id}`;
//   return axios.get(url);
// };

// const getAlbum = userId => {
//   const url = `https://jsonplaceholder.typicode.com/albums?userId=${userId}`;
//   return axios.get(url);
// };

// const getPhoto = albumId => {
//   const url = `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`;
//   return axios.get(url);
// };

// getUser(1)
//   .then(user => {
//     console.log(user.data.name);
//     return getAlbum(user.data.id);
//   })
//   .then(album => {
//     console.log("Nazwa pierwszego albumu to : ", album.data[0].title);
//     console.log("Ilość albumów w zbiorze : ", album.data.length);
//     return getPhoto(album.data[0].id);
//   })
//   .then(photo => {
//     for (let i = 0; i < photo.data.length; i++)
//       console.log(i, " : ", photo.data[i].title);
//   })

//   .catch(error => {
//     console.log("Brak danych");

// });

/*  Zad 11

Dodajmy do zadania 10 zapis do pliku listy pobranych zdjęć. Plik powinniśmy nazwać zgodnie z 
nazwą albumu. Jeżeli nazwa albumu przekracza 10 znaków powinniśmy skrócić nazwę naszego pliku.

*/
// const fs = require("fs");
// const axios = require("axios");
// const util = require("util");

// const getUser = id => {
//   const url = `https://jsonplaceholder.typicode.com/users/${id}`;
//   return axios.get(url);
// };

// const getAlbum = userId => {
//   const url = `https://jsonplaceholder.typicode.com/albums?userId=${userId}`;
//   return axios.get(url);
// };

// const getPhoto = albumId => {
//   const url = `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`;
//   return axios.get(url);
// };

// getUser(1)
//   .then(user => {
//     console.log(user.data.name);
//     return getAlbum(user.data.id);
//   })
//   .then(album => {
//     console.log("Nazwa pierwszego albumu to : ", album.data[0].title);
//     console.log("Ilość albumów w zbiorze : ", album.data.length);
//     return getPhoto(album.data[0].id);
//   })
//   .then(photo => {
//     var list_of_photos = {};

//     for (let i = 0; i < photo.data.length; i++) {
//       console.log(i, " : ", photo.data[i].title);
//       list_of_photos[i] = photo.data[i].title;
//     }

//     const writeFile = util.promisify(fs.writeFile);
//     // writeFile("photos.txt", JSON.stringify(photo.data))

//     writeFile("photos.txt", JSON.stringify(list_of_photos))
//       .then(() => {
//         console.log("file saved");
//       })
//       .catch(error => {
//         console.log("error saving file", error);
//       });
//   })

//   .catch(error => {
//     console.log("Brak danych");
//   });
