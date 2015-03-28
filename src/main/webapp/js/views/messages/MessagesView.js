define([
  'jquery',
  'underscore',
  'backbone',
  'views/sidebar/SidebarView',
  'models/messages/MessagesModel',
  'text!templates/messages/messagesTemplate.html'
], function($, _, Backbone, SidebarView, MessagesModel, messagesTemplate){

  var MessagesView = Backbone.View.extend({
    el: $("#page"),

    render: function(){
      
      $('.menu li').removeClass('active');
      $('.menu li a[href="#"]').parent().addClass('active');
      this.$el.html(messagesTemplate);
      $('#messageTitle').html('texto de ejemplo');
      var sidebarView = new SidebarView();
      sidebarView.render();
 
    }

  });

  return MessagesView;
  
});
