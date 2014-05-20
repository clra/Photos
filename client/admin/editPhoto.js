
Template.editPhoto.photos = function(){
	return Photos.find({});
}
Template.editPhoto.editPhotoId = function(){
	return Photos.findOne({_id: Session.get("editView")})
}

Template.editPhoto.events({
 "click [data-action='updatePhoto']" : function(e, t){
 	this._id;
 	e.preventDefault();
 	Photos.update({_id: Session.get("editView")}, {
 		$set: {
 			title: $(t.find("[name='titleEdit']")).val(), 
  		description: $(t.find("[name='descriptionEdit']")).val(),
  		url: $(t.find("[name='urlEdit']")).val()
   	}
  })
  Session.set("editView", false); 
   
 },
 "click [data-action='selectPhoto']" : function(e, t){
 	e.preventDefault();
 	Session.set("editView", $(t.find("[name='photoDropdown']")).val());
 },

 "click [data-action='cancel']" : function(e, t){
 	e.preventDefault();
 	Session.set("editView", false);  
 }
});
