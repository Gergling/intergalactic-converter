var deromanise = require('../symbology/deromanise');

var register = require('../symbology/register');

var answers = [];

function interpret(phrase) {
    // If it ends in a question mark, it's a question.
    // Otherwise it's a declaration.
    if (phrase.split('?').length > 1) {
        // Validate whether the question can be understood.
        answers.push(require('../question/interpret')(phrase.replace('?', '').trim()));
    } else {
        var pair = phrase.split(' is ');
        var value = pair[1].trim();

        // Check whether value is a roman numeral.
        if (deromanise.numerals[value]) {
            // Value is a roman numeral
            register('symbol', pair[0], value);
        } else {
            // Value is unit credit value.
            var unitCreditValue = require('../symbology/unit')(pair[0], value);
            register('unit', unitCreditValue.name, unitCreditValue.value);
        }
    }
}

module.exports = {
    interpret: interpret,
    answers: answers
};
