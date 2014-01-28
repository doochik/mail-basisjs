basis.require('basis.ui');

var messages = require('../model/m-messages.js').all;

var vMessages = new basis.ui.Node({
    dataSource: messages,
    active: true,
    template: resource('../template/messages.tmpl'),
    childClass: {
        template: '<div>#{mid} {subject}</div>',
        binding: {
            mid: 'data:',
            subject: 'data:'
        }
    }
});

module.exports = vMessages;
