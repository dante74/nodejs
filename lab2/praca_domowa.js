// 09 /////////////////////////////////////////////////////////////////////

// const os = require('os');

// const info = os.userInfo();
// console.log('Hello - start application');

// for(let i = 1000; i<=5000 ; i+=1000){
//     setTimeout(()=>console.log(i/1000, 'sec'),i); 
// }
// setTimeout(()=>console.log(`Hello ${info.username}`),5000);


// 10 ///////////////////////////////////////////////////////////////////
// const os = require('os');
// const fs = require('fs');

// const info = os.userInfo();
// console.log('Hello - start application');

// for(let i = 1000; i<=5000 ; i+=1000){
//     setTimeout(()=>console.log(i/1000, 'sec'),i); 
// }

// setTimeout(()=>{ fs.writeFile('powitanie.txt', `Hello  ${info.username}`, function (error) {
//     if (error) {
//         console.log('błąd zapisu pliku', error);
//     } else {
//         console.log('Info zostało zapisane do pliku');
//     }
// });},5000);

// 11 ///////////////////////////////////////////////////////////////


// const request = require("request");
// const url = 'https://api.openweathermap.org/data/2.5/weather?APPID=0ed761300a2725ca778c07831ae64d6e&q=Bia%C5%82ystok';
// request(url, (error, response, body) => {
// let json = JSON.parse(body);
// //console.log(body);
// //console.log(json);
// console.log(`Country :  ${json.sys.country}`);
// console.log(`City : ${json.name}`);
// console.log(json.main);
// console.log("Wind : ",json.wind);
// json.rain ? console.log(`Rain : ${json.rain}`) : console.log('No Rain');

// });

// 12 /////////////////////////////////////////////////////////
// const request = require("request");
// const yargs = require('yargs');
// const city = yargs.argv.city;

// const wheater = function(city){

//     let url = 'https://api.openweathermap.org/data/2.5/weather?APPID=0ed761300a2725ca778c07831ae64d6e&q=';
//     url += city;    

//     request(url, (error, response, body) => {
//         let json = JSON.parse(body);
//         console.log(`Country :  ${json.sys.country}`);
//         console.log(`City : ${json.name}`);
//         console.log(json.main);
//         console.log("Wind : ",json.wind);
//         json.rain ? console.log(`Rain : ${json.rain}`) : console.log('No Rain');
        
//         });

// }

// wheater(city);
