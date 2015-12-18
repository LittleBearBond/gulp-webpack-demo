var a = require('./a');;
console.log('b');
module.exports = {
    log: function() {
        console.log('b--moudle')
    },
    name: 'b',
    a: a
};
