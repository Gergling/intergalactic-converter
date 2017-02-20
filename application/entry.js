// Take input
var interpret = require('./interpret');
var fs = require('fs');
fs.readFile('input.txt', 'utf-8', function (err,data) {
    if (err) {
        throw err;
    }
    data.split('\n').forEach(interpret.interpret);

    // Run the code to output the questions.
    console.log(interpret.answers);
});
