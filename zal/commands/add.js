const readFile = require("../readFile");
const fs = require("fs");
const colors = require("colors");



const add = (quote, author, group = "no identified") => {
  let how = 0;
  let thoughtsList = readFile("thoughtsList.json");
  id = thoughtsList.length + 1;

  thoughtsList.push({ id, quote, author, group, how });
  console.log(thoughtsList);

  fs.writeFileSync("thoughtsList.json", JSON.stringify(thoughtsList));
};
module.exports = add;
