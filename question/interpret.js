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

function (intergalacticUnit) {
    
}

function interpret(question) {
    var answer = 'I have no idea what you are talking about.';
    var idx = Object.keys(format).filter(function (fmt) {
        return question.indexOf(fmt) > -1;
    })[0];
    if (format[idx] !== undefined) {
        answer = format[idx](question.replace('idx', ''));
    }
    return answer;
}

module.exports = interpret;
