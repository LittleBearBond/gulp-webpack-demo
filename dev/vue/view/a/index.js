module.exports = {
    template: require('./template.html'),
    replace: true,
    data: function() {
        return {
            firstname: 'little',
            lastname: 'bear'
        }
    },
    computed: {
        fullname: function() {
            return this.firstname + this.lastname
        }
    },
    components: {
        'app-com1': require('../../components/com1'),
        'app-com2': require('../../components/com2')
    }
};
