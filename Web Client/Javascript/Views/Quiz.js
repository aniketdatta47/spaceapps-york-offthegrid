var A = �;
(function(root){
	root.namespace("Models").Quiz = Backbone.View.extend({
		collection: root.Models.Quiz,
		template: root.Templates.Quiz,
		render: function(){
			this.$el.html(this.template({collection: this.collection}));
			return this;
		}
	});
})(A);