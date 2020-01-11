const readFile = require("../readFile");
const fs = require("fs");
const colors = require("colors");

const random = fileWithThoughts => {
  let thoughtsList = readFile(fileWithThoughts);
  if (thoughtsList.length == 0) {
    return console.log("\n\n Brak pliku z bazą cytatów !!!!!! \n".yellow.bold);
  }

  let rand = thoughtsList[Math.floor(Math.random() * thoughtsList.length)];
  console.log(rand);
  rand.how += 1;
  fs.writeFileSync(fileWithThoughts, JSON.stringify(thoughtsList));
};

module.exports = random;
