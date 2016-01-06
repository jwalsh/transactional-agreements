console.log('Synthetic Legal Events (e.g., City Permit Approvals)');

var fs = require('fs');
var parse = require('csv-parse');
var csv = fs.readFileSync('db/Board_of_Zoning_Appeal_Requests.csv',
                          'utf8');
var obj = JSON.parse(fs.readFileSync('db/cambridge-board-zoning.json',
                                     'utf8'));
// var Git = require("nodegit");

// Subscribe to data set
// https://github.com/CityOfBoston/Code-Ordinances
// https://github.com/FreeCodeCamp/FreeCodeCamp

var threshold = 500;

var contract = function(expected, actual) {
  //  console.log(expected, actual);
  return actual - expected < 500;
};

var poll = function() {
  setTimeout(function() {
    console.log('Legal Event: ',
                new Date().getTime(),
                '; Execute Contract:',
                contract(new Date().getTime(),
                         new Date().getTime() + Math.random() * 1000));
    poll();
  }, Math.random() * 2000);
};

poll();
