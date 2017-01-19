module.exports = {
    setLocalStorage: function() {
        global.localStorage = {
            getItem: function (key) {
                return this[key];
            },
            setItem: function (key, value) {
                this[key] = value;
            },
            removeItem: function (key) {
                delete this[key];
            }
        };

        const jwt = require('jsonwebtoken');
        const token = jwt.sign({ foo: 'bar', exp: Math.floor(Date.now() / 1000) + 3000 }, 'shhhhh');
        localStorage.setItem('id_token', token);
    }
};
