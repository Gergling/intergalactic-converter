var deromanise = require('../symbology/deromanise');

// Store intergalactic symbols representing roman numerals.
var symbols = {};

// Store units and their credit amount for a single item.
var units = {};

var answers = [];

function interpret(phrase) {
    // If it ends in a question mark, it's a question.
    // Otherwise it's a declaration.
    if (phrase.split('?').length > 1) {
        // Validate whether the question can be understood.
    } else {
        var pair = phrase.split(' is ');
        var value = pair[1];
        // Check whether value is a roman numeral.
        if (deromanise.numerals[value]) {
            // Value is a roman numeral
            symbols[pair[0]] = value;
        } else {
            // Value is unit credit value.
            var unitCreditValue = require('../symbology/unit')(pair[0], value);
            units[unitCreditValue.name] = unitCreditValue.value;
        }
    }
}

module.exports = {
    interpret: interpret,
    answers: answers
};
