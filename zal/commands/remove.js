const readFile = require("../readFile");
const fs = require("fs");
const colors = require("colors");

const remove = (fileWithThoughts, id) => {
  let thoughtsList = readFile(fileWithThoughts);

  if (thoughtsList.length == 0) {
    return console.log("\n\n Brak pliku z bazą cytatów !!!!!! \n".yellow.bold);
  }

  if (id <= 0 || id > thoughtsList.length) {
    return console.log(
      "------  \n Podano  niepoprawny parametr - brak w bazie  -----".red.bold
    );
  }
  const filteredList = thoughtsList.filter(x => x.id !== id);
  let ids = 1;
  for (let elem of filteredList) {
    elem.id = ids;
    ids += 1;
  }
  console.log(
    "\n--------- Usunięto podany rekord z pliku -----------".red.bold
  );
  fs.writeFileSync(fileWithThoughts, JSON.stringify(filteredList));
};

module.exports = remove;
