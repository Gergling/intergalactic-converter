var register = require('./register');
var deromanise = require('./deromanise');

function filterSymbols(term) {
    // Return only terms which are intergalactic symbols.
    var symbol = register('symbol', term);
    return symbol && deromanise.numerals[symbol];
}

function convert(intergalacticQuantityUnit) {
    // Find the intergalactic value of the unit
    // for the credit conversion.
    var intergalacticQuantity = intergalacticQuantityUnit
        .split(' ')
        .filter(filterSymbols)
        .join(' ');

    // Fail gracefully if the intergalacticQuantity is empty.
    // This means there are no recognised symbols.
    if (intergalacticQuantity.trim() === '') {
        throw new Error('No symbols to convert.');
    }

    // Find the unit name.
    var unit = intergalacticQuantityUnit.split(' ').filter(function (term) {
        // Return only the unit.
        return !filterSymbols(term);
    })[0];

    // Returns an object with the intergalactic quantity
    // and the name of the stock unit.
    return {
        intergalacticQuantity: intergalacticQuantity,
        unitName: unit.trim()
    };
}

module.exports = convert;
