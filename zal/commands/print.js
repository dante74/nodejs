const readFile = require("../readFile");
const colors = require("colors");

const print = (author, group, find) => {
  let thoughtsList = readFile("thoughtsList.json");
  if (thoughtsList.length == 0) {
    return console.log("\n\n Brak pliku z bazą cytatów !!!!!! \n".yellow.bold);
  }

  if (typeof author !== "undefined") {
    let index = thoughtsList.findIndex(x => x.author === author);
    if (index === -1) {
      console.log("Nie ma takiego autora");
    } else {
      let filteredList = [];
      filteredList = thoughtsList.filter(function(value) {
        return value.author === author;
      });
      return console.log(filteredList);
    }
  } else if (typeof group !== "undefined") {
    let index = thoughtsList.findIndex(x => x.group === group);
    if (index === -1) {
      console.log("Nie ma takiej grupy");
    } else {
      let filteredList = [];
      filteredList = thoughtsList.filter(function(value) {
        return value.group === group;
      });
      console.log(filteredList);
    }
  } else if (typeof find !== "undefined") {
    let filteredList = [];
    filteredList = thoughtsList.filter(function(value) {
      if (value.quote.indexOf(find) !== -1) {
        return value;
      }
    });
    if (filteredList.length !== 0) {
      console.log(filteredList);
    } else {
      console.log("Brak fragmentu tekstu w bazie");
    }
  } else {
    return console.log(thoughtsList);
  }
};

module.exports = print;
