basis.require('basis.data');
basis.require('basis.net');
basis.require('basis.net.action');

var mMessages = new basis.data.Dataset({
    syncAction: basis.net.action.create({
        url: '//mail.yandex.ru/neo2/handlers/handlers3.jsx?_handlers=messages',
        success: function(data){
            this.set(data);  // или путь до массива с элементами
        }
    })
});

module.exports = mMessages;
