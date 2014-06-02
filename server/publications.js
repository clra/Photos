Meteor.publish("allPhotos", function(){
  return Photos.find({userId: this.userId});
});

Meteor.publish("onePhoto", function(){
	return Photos.findOne({});
});