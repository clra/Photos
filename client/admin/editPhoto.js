Template.editPhoto.photos = function(){
	return Photos.find({});
}

Template.editPhoto.events({
 "click [data-action='updatePhoto']" : function(e, t){
 	e.preventDefault();
  console.log("you submited the form.");
  
 
 	Photos.update({_id: $("[name='photoDropdown']").val()},
 	{$set: {
 	title: $(t.find("[name='titleEdit']")).val(), 
  	description: $(t.find("[name='descriptionEdit']")).val()
   }})
   
 }

});
/*
Photos.update({_id: $("[name='photoDropdown']").val()},
 	{$set: {
 	title: $("[name='titleEdit']").val(), 
  	description: $("[name='descriptionEdit']").val()
   }}});
   */