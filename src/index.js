var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('db/cambridge-board-zoning.json',
                                     'utf8'));

console.log(obj);
