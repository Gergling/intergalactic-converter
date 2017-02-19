// Take input
var fs = require('fs');
fs.readFile('input.txt', 'utf-8', function (err,data) {
    if (err) {
        throw err;
    }
    data.split('\n').forEach(require('./interpret').interpret);

    // Run the code to output the questions.
});
