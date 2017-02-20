var register = require('./register');

function romanise(intergalacticQuantity) {
    // Creates a roman numeral string from the intergalactic symbols.
    return intergalacticQuantity
        .split(' ')
        .map(function (intergalacticSymbol) {
            // Finds the roman numeral equivalent of the intergalactic symbol.
            return register('symbol', intergalacticSymbol);
        }).join('')
}

module.exports = romanise;
