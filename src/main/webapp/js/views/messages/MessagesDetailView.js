define([
  'jquery',
  'underscore',
  'backbone',
  'models/messages/MessagesModel',
  'text!templates/messages/messagesDetailTemplate.html'
], function($, _, Backbone, MessagesModel, messagesDetailTemplate){

  var MessagesDetailView = Backbone.View.extend({
    el: $("#detail"),

    initialize: function() {

      var that = this;
      var options = {query: 'findRest.json'}
     

      var onDataHandler = function(collection) {
          that.render();
      }

      var enError = function(model, response, options) {
    	  debugger;
    	  alert("hubo un error");
      }
      
      this.model = new MessagesModel(options);
      this.model.fetch({ success : onDataHandler, dataType: "jsonp",
    	  					error : enError });

    },

    render: function(){

      var data = {
        message: this.model.toJSON(),
        _: _ 
      };
      var compiledTemplate = _.template( messagesDetailTemplate, data );
      this.$el.html(compiledTemplate);
    }

  });

  return MessagesDetailView;
  
});
