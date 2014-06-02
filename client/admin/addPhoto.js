Template.addPhoto.events({
 "click [data-action='inputPhoto']" : function(e, t){
 	e.preventDefault();
   var newPhoto = {
  	title: $(t.find("[name='titleInput']")).val(), 
  	url: $(t.find("[name='urlInput']")).val(),
  	description: $(t.find("[name='descriptionInput']")).val(),
  	userId: Meteor.userId()
  };
  console.log(newPhoto);
  Photos.insert(newPhoto);
 }

});