var register = require('./register');
var deromanise = require('./deromanise');

function unit(intergalacticQuantityUnit, value) {
    // Value is not a roman numeral,
    // so it must be a credit value for a unit.
    var credits = value.replace(' Credits', '') * 1;

    // Find the intergalactic value of the unit
    // for the credit conversion.
    var intergalacticQuantity = intergalacticQuantityUnit.split(' ').filter(function (term) {
        // Return only terms which are intergalactic symbols.
        var symbol = register(term);
        return symbol && deromanise.numerals[symbol];
    }).join('');

    // Todo: Fail gracefully if the unitSymbols is empty.
    // This means there are no recognised symbols.

    // Find the unit name.
    var unit = intergalacticQuantityUnit.split(' ').filter(function (term) {
        // Return only the unit.
        return register(term) === undefined;
    });

    // Deromanise to find the intergalactic quantity conversion.
    var quantity = deromanise.convert(intergalacticQuantity);

    // Find the credits per single unit.
    return {
        name: unit,
        value: credits / quantity
    };
}

module.exports = unit;
