var deromanise = require('deromanise');

// Store intergalactic symbols representing roman numerals.
var symbols = {};

// Store units and their credit amount for a single item.
var units = {};

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
            // Value is not a roman numeral,
            // so it must be a credit value for a unit.
            var credits = value.replace(' Credits', '') * 1;

            // Find the unit, and intergalactic value of the unit
            // for the credit conversion.
            var unitSymbols = pair[0].split(' ').filter(function (term) {
                // Term will be an intergalactic symbol
                var symbol = symbols[term];
                return symbol && deromanise.numerals[symbol];
            }).join('');

            // Todo: Fail gracefully if the unitSymbols is empty.
            // This means there are no recognised symbols declared yet.

            var unitSymbols = pair[0].split(' ').filter(function (term) {
                // Term will be an intergalactic symbol
                var symbol = symbols[term];
                return symbol && deromanise.numerals[symbol];
            });
            var deromanise.convert(declaration.name);
        }
        // Register the declaration.
    }
}

module.exports = interpret;
