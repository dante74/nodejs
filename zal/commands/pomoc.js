const colors = require("colors");

const pomoc = () => {
  console.log();
  console.log(" ------ Pomoc ------ ".rainbow);
  console.log();
  console.log(
    'add --quote="Treść złotej myśli" --author="Imię i nazwisko autora --group="nazwa grupy"'
      .green
  );
  console.log(
    'add --quote="Treść złotej myśli" --author="Imię i nazwisko autora"'.green
  );
  console.log("print".yellow);
  console.log('print --author="Imię i nazwisko"'.yellow);
  console.log('print --group="nazwa grupy"'.yellow);
  console.log('print --find="fragment tekstu"'.yellow);
  console.log("remove --id=numer usuwanego elementu".red);
  console.log("random".green);
  console.log("server".yellow);
};

module.exports = pomoc;
