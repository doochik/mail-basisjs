basis.require('basis.ui');

var vMessages = new basis.ui.Node({
    active: true,
    template: resource('../template/messages.tmpl'),
    dataSource: resource('../model/m-messages.js').fetch(),
    childClass: {
        // описание класса view для дочерних элементов
    }
});

module.exports = vMessages;
