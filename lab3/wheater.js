const request = require("request");

function wheater(url) {
  request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      // parsujemy naszą odpowiedź do obiektu JS
      const weather = JSON.parse(body);
      // wyświetlamy temperaturę
      console.log("temperatura", weather.main.temp);
    } else {
      // jeżeli zmienna `error` nie będzie pusta lub `statusCode` zwróci inny kod niż 200 wtedy informujemy o błędzie
      console.log("błąd pobierania danych");
    }
  });
}

module.exports = wheater;
