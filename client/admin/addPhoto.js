Template.addPhoto.events({
 "click [data-action='inputPhoto']" : function(e, t){
 	e.preventDefault();
  console.log("you submited the form.");
  var newPhoto = {
  	title: $(t.find("[name='titleInput']")).val(), 
  	url: $(t.find("[name='urlInput']")).val(),
  	description: $(t.find("[name='descriptionInput']")).val()
    //add PhotoId generator
  };
  console.log(newPhoto);
 	Photos.insert(newPhoto);
 }

});