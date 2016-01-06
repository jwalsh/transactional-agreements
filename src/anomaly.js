var detector = require('anomaly-detector');

var random_variables = {
    'a' : [ 18, 15, 16, 17, 14, 15, 16 ],
    'b' : [ 110, 130, 125, 124, 128, 118, 119 ],
    'c' : [ 110, 115, 113, 114, 90, 116, 90 ]
};

// by default, detector is storing training data in mongo database
detector.init(detector.default_options, function(){
    detector.train(random_variables, function(distributions){
        console.log('training finished!');
        console.log(distributions);
        detector.close();
    });
});
