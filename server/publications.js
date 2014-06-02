Meteor.publish("allPhotos", function(){
  return Photos.find({userId: this.userId});
});

Meteor.publish("onePhoto", function(photoId){
	return Photos.find({_id: photoId});
});