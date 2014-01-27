basis.require('basis.app');
basis.require('basis.ui');
;;;basis.require('basis.devpanel');


module.exports = basis.app.create({
  title: 'My app',

  init: function(){
    return new basis.ui.Node({
      template: resource('app/template/layout.tmpl'),
      binding: {
          vMessages: resource('app/view/v-messages.js')
      }
    });
  }
});
