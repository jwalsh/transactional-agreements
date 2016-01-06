var stoch = require('stochastic');

var start = 10;
var samples = Array.apply(null, Array(20).map(function() { }));

console.log(samples);

// https://en.wikipedia.org/wiki/Geometric_Brownian_motion
var gbm = stoch.GBM(10, .5, 10, true, samples.length, true);

console.log(gbm);

var hist = stoch.hist(gbm);

console.log(hist);

var dist = samples.map(function(e, i, c) {
  var result;
  if (i === 0) {
    result = start;
  } else {
    var sample = Math.floor(Math.random() * gbm.length);
    result = start + gbm[sample];
  }
  return result;
});

console.log(dist);
