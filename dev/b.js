require('./a').log();
console.log('b');

module.exports = {
    log: function() {
        console.log('b')
    },
    name: 'b'
};
