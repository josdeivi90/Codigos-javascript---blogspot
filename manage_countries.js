const fs = require('fs');
var countriesData = require("./countries.json");

countriesData.Paises[2].Presidente = "Lopez obrador";

var dataToWrite = JSON.stringify(countriesData, null, 2);
fs.writeFileSync('countries.json', dataToWrite);