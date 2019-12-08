const yargs = require('yargs');
const myCalc = require('./calc');
const fs = require('fs');

const args = yargs.argv;
console.log(args);
console.log(process.argv);

const a = args.a;
const b = args.b;
const operator = args.operator;

function mathResult(wynik) {
    // wyświetlamy wynik w kosoli
    console.log('wynik:', wynik);

    // wywołujemy funkcję asynchroniczną do zapisu wyniku do pliku
    // 'writeFile' przyjmuje 3 parametry wejściowe
    // 1 to nazwa pliku, 2 to dane jakie chcemy zapisać do pliku, 3 zaś to funkcja callback 
    //która przyjmuje 1 parametr w którym to mieści się błąd jeżeli zapis do pliku się nie powiódł
    // wynkcja zostnie wywołana po zapise pliku lub napotkanym błędzie podczas zapisu
    fs.writeFile('wynik.txt', wynik, function (error) {
        if (error) {
            console.log('błąd zapisu pliku', error);
        } else {
            console.log('YAY! plik został zapisany!');
        }
    });
}
switch (operator) {
    case '+':
        myCalc.add(a, b,mathResult);
        break;
    case '-':
        myCalc.sub(a, b,mathResult);
        break;

    case '*':
        myCalc.multi(a, b,mathResult);
        break;

    case '/':
        myCalc.div(a, b,mathResult);
        break;
}
