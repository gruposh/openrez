define([
	'underscore',
	'backbone'
], function(_, Backbone) {
	
	var MessagesModel = Backbone.Model.extend({
	
		defaults: {
			query: "uknown"
		},
		
		initialize: function( options ) {
			this.query = options.query;
		},
		
		url: function() {
			return 'services/messages/' + this.query;
		},
		
		parse: function(res) {
			return res.data;
		}
	});
	
	return MessagesModel;
});