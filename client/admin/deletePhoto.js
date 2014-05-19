Template.deletePhoto.photos = function(){
	return Photos.find({});
}

Template.deletePhoto.events({
  "click [data-action='removePhoto']" : function(e, t){
    e.preventDefault();
    Photos.remove({_id: $(t.find("[name='removeDropdown']")).val()});
  }
});