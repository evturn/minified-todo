var app = app || {};

var TodoList = Backbone.Collection.extend({
	model: app.Todo,
	// Uncomment below when I get wifi in the morning
	// localStorage: new Backbone.LocalStorage('todos-backbone'),
	completed: {
		return this.filter(function( todo ) {
			return todo.get('completed');
		});
	},
	remaining: function() {
		return this.without.apply( this, this.completed() );
	},
	nextOrder: function() {
		if (!this.length) {
			return 1;
		}
		return this.last().get('order') + 1;
	},
});