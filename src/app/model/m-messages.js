basis.require('basis.data');
basis.require('basis.entity');
basis.require('basis.net');
basis.require('basis.net.action');

var Message = basis.entity.createType('Message', {
    mid: basis.entity.StringId,
    subject: String,
    firstline: String
});

Message.all.setSyncAction(basis.net.action.create({
    url: '/api/messages',
    success: function(data){
        var messagesList = data.handlers[0].data.message;
        console.log(messagesList);
        this.sync(messagesList);
    }
}));


module.exports = Message;
