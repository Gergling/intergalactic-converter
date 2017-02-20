var data = {
    symbol: {},
    unit: {}
};

function register(type, name, value) {
    if (value !== undefined) {
        data[type][name] = value;
    }
    return data[type][name];
}

module.exports = register;
