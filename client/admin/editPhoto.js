var chosenId;//Id from dropdown exists regardless of session
             //unlike dropdown

Template.editPhoto.photos = function(){
	return Photos.find({});
}

Template.editPhoto.events({
 "click [data-action='updatePhoto']" : function(e, t){
 	e.preventDefault();
 	Photos.update({_id: chosenId},
 	{$set: {
 	title: $(t.find("[name='titleEdit']")).val(), 
  	description: $(t.find("[name='descriptionEdit']")).val()
    }      })
    Session.set("editView", false); 
   
 },
 "click [data-action='selectPhoto']" : function(e, t){
 	e.preventDefault();
 	chosenId = $(t.find("[name='photoDropdown']")).val();
 	Session.set("editView", true);
 },

 "click [data-action='cancel']" : function(e, t){
 	e.preventDefault();
 	Session.set("editView", false);  
 }

});
