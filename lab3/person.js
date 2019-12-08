const request = require("request");
const wheater = require("./wheater.js");

function persons(url2) {
  request(url2, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const user = JSON.parse(body);
      console.log(user.name);
      console.log("lat", user.address.geo.lat);
      console.log("lng", user.address.geo.lng);
      //-----------------------------------------
      const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${user.address.geo.lat}&lon=${user.address.geo.lng}`;
      wheater(url);
      //------------------------------------------
    } else {
      console.log("User not found");
    }
  });
}

module.exports = persons;
