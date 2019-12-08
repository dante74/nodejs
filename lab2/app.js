const yargs = require('yargs');
const myCalc = require('./calc');
const fs = require('fs');

const args = yargs.argv;
console.log(args);
console.log(process.argv);

const a = args.a;
const b = args.b;
const operator = args.operator;



switch (operator) {
    case '+':
        myCalc.add(a, b,function(wynik){
            console.log('wynik : ',wynik);
        });
        break;
    case '-':
        myCalc.sub(a, b,function(wynik){
            console.log('wynik : ',wynik);
        });
        break;

    case '*':
        myCalc.multi(a, b,function(wynik){
            console.log('wynik : ',wynik);
        });
        break;

    case '/':
        myCalc.div(a, b,function(wynik){
            console.log('wynik : ',wynik);
        });
        break;
}


