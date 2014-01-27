basis.require('basis.ui');

var vMessages = new basis.ui.Node({
    active: true,
    template: resource('../template/messages.tmpl'),
    binding: {
        mMessages: resource('../model/m-messages.js')
    }
});

module.exports = vMessages;
