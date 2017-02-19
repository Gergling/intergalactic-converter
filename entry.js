// Take input
var fs = require('fs');
fs.readFile('input.txt', function (err,data) {
    if (err) {
        throw err;
    }
    data.forEach(require('interpret'));

    // Run the code to output the questions.
});
