// Take input
var filePath = process.argv[2];

if (filePath === undefined) {
    throw 'Please provide a file input.'
}

var interpret = require('./interpret');
var fs = require('fs');
fs.readFile(filePath, 'utf-8', function (err,data) {
    if (err) {
        throw err;
    }

    // Run the interpretation.
    data.split('\n').forEach(function (phrase) {
        interpret.interpret(phrase);
        // Output the questions.
        console.log(phrase);
    });

    console.log();

    // Output the answers.
    interpret.answers.forEach(function (answer) {
        console.log(answer);
    });
});
