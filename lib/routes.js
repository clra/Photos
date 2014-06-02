Router.map(function() {

this.route('singlePhoto', {
  template: 'singlePhoto',
  path: '/photo/:_id',
  waitOn: function() {
    return Meteor.subscribe('onePhoto', this.params._id);
	},
	data: function(){
		var self = this;
		return {
			photo: function(){
				return Photos.findOne({ _id: self.params._id });
			}
		};
	}
});
}) 