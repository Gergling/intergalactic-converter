var format = {
    'how much is ': convert,
    'how many Credits is ': require('')
};

var register = require('../symbology/register');

// Converts the intergalactic quantity into a credit value.
function convert(intergalacticQuantity) {
    return require('../symbology/deromanise')
        .convert(intergalacticQuantity
            // Creates a roman numeral string from the intergalactic symbols.
            .split(' ')
            .map(function (intergalacticSymbol) {
                // Finds the roman numeral equivalent of the intergalactic symbol.
                return register('symbol', intergalacticSymbol);
            }).join('')
        );
}

function interpret(question) {

}

module.exports = interpret;
