const readFile = require("../readFile");
const fs = require("fs");
const colors = require("colors");

const add = (fileWithThoughts, quote, author, group = "no identified") => {
  let how = 0;
  let thoughtsList = readFile(fileWithThoughts);
  id = thoughtsList.length + 1;

  thoughtsList.push({ id, quote, author, group, how });
  console.log(thoughtsList);

  fs.writeFileSync(fileWithThoughts, JSON.stringify(thoughtsList));
};
module.exports = add;
