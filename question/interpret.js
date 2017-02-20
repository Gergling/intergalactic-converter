var format = {
    'how much is ': numerise,
    'how many Credits is ': unitPrice
};

var register = require('../symbology/register');

var romanise = require('../symbology/romanise');

// Converts the intergalactic quantity into a credit value.
function convert(intergalacticQuantity) {
    return require('../symbology/deromanise')
        .convert(romanise(intergalacticQuantity));
}

function unitPrice(intergalacticUnit) {
    var conversion = require('../symbology/convert')(intergalacticUnit);
    console.log('unit price 1', conversion)
    console.log('unit price 2', convert(conversion.intergalacticQuantity))
    console.log('unit price 3', register('unit', conversion.unitName))
    return convert(conversion.intergalacticQuantity) * register('unit', conversion.unitName);
}

function numerise(intergalacticQuantity) {
    return [
        intergalacticQuantity,
        'is',
        convert(intergalacticQuantity)
    ].join(' ');
}

function interpret(question) {
    var answer = 'I have no idea what you are talking about.';
    var idx = Object.keys(format).filter(function (fmt) {
        return question.indexOf(fmt) > -1;
    })[0];
    if (format[idx] !== undefined) {
        answer = format[idx](question.replace(idx, ''));
    }
    return answer;
}

module.exports = interpret;
