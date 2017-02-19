var declarations = {};

function register(name, value) {
    // Translate value into credits
    if (value !== undefined) {
        declarations[name] = value;
    }
    return declarations[name];
}

module.exports = register;
