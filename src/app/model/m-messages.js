basis.require('basis.data');

var mMessages = new basis.data.Object({
    syncAction: basis.net.action.create({
        url: '//mail.yandex.ru/neo2/handlers/handlers3.jsx?_handlers=messages',
        success: function(data){
            this.update(data);
        }
    })
});

module.exports = mMessages;
