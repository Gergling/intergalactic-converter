var data = {};

function register(type, name, value) {
    if (value !== undefined) {
        if (data[type] === undefined) {data[type] = {};}
        data[type][name] = value;
    }
    return data[type][name];
}

module.exports = register;
