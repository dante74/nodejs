const yargs = require("yargs");
const print = require("./commands/print");
const random = require("./commands/random");
const remove = require("./commands/remove");
const server = require("./commands/server");
const add = require("./commands/add");
const pomoc = require("./commands/pomoc");
const colors = require("colors");
//const fileWithThoughts = "thoughtsList.json";
const fileWithThoughts = "List.json";

console.clear();
console.log(
  "\n **********************************************************************************************"
    .yellow.bold
);

(function() {
  let command = yargs.argv._[0];
  let author = yargs.argv.author;
  let quote = yargs.argv.quote;
  let id = yargs.argv.id;
  let group = yargs.argv.group;
  let find = yargs.argv.find;

  switch (command) {
    case "pomoc":
      pomoc();
      break;

    case "add":
      if (author && quote) {
        add(fileWithThoughts, quote, author, group);
      } else
        return console.log(
          " \n--------- Nie podałeś wymaganych parametrów - wybierz opcję 'pomoc' ---------"
            .yellow.bold
        );
      break;

    case "remove":
      if (id) {
        remove(fileWithThoughts, id);
      } else {
        console.log(
          "\n----------  Nie podano wymaganego parametru - patrz 'pomoc ' -------- "
            .red.bold
        );
      }
      break;

    case "print":
      print(fileWithThoughts, author, group, find);
      break;

    case "random":
      random(fileWithThoughts);
      break;

    case "server":
      server(fileWithThoughts);
      break;

    default:
      console.log(
        "\n -------  Podaj poprawne polecenie lub użyj opcji 'pomoc (node app pomoc)'  --------"
          .rainbow
      );
      console.log(
        "\n -------  Podaj poprawne polecenie lub użyj opcji 'pomoc (node app pomoc)'  --------"
          .inverse
      );
  }
})();
