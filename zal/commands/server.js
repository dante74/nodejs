const fs = require("fs");
const readFile = require("../readFile");
const colors = require("colors");

const server = () => {
  const request = require("request");
  const url =
    "http://ec2-18-217-240-10.us-east-2.compute.amazonaws.com/node/quotes.php";
  request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const data = JSON.parse(body);
      console.log(data);

      //--------------
      let thoughtsList = readFile("thoughtsList.json");
      if (thoughtsList.length == 0) {
        console.log(
          "\n\n Brak pliku z bazą cytatów. Tworzę nowy plik !!!!!! \n".yellow
            .bold
        );
      }
      let index = thoughtsList.findIndex(x => x.quote === data.quote);
      if (index === -1) {
        console.log("--------  Dodaję cytat do bazy  ----------".red.bold);
        let author = data.author;
        let quote = data.quote;
        let group = "server";
        let id = thoughtsList.length + 1;
        let how = 0;
        thoughtsList.push({ id, quote, author, group, how });
        fs.writeFileSync("thoughtsList.json", JSON.stringify(thoughtsList));
      } else {
        console.log(
          "*********  Cytat jest już w bazie  **********".yellow.bold
        );
      }
      //-------------
    } else {
      console.log("Server not found");
    }
  });
};

module.exports = server;
