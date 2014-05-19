Meteor.publish("allPhotos", function(){
  return Photos.find({userId: this.userId});
});


