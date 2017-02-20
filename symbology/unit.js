var register = require('./register');
var deromanise = require('./deromanise');
var convert = require('./convert');
var romanise = require('./romanise');

function unit(intergalacticQuantityUnit, value) {
    // Value is not a roman numeral,
    // so it must be a credit value for a unit.
    var credits = value.replace(' Credits', '') * 1;

    var intergalacticQuantityUnitParts = convert(intergalacticQuantityUnit);

    // Deromanise to find the intergalactic quantity conversion.
    var quantity = deromanise.convert(romanise(intergalacticQuantityUnitParts.intergalacticQuantity));

    // Find the credits per single unit.
    return {
        name: intergalacticQuantityUnitParts.unitName,
        value: credits / quantity
    };
}

module.exports = unit;
