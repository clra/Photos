
if(Meteor.isClient){

Router.map(function() {
	this.route('adminAddPhoto', {
		template: 'addPhoto',
		path: '/admin/addPhoto',
		layoutTemplate: "photoLayout",
		waitOn: function(){
			return Meteor.subscribe("allPhotos");
		}
	});
	this.route('adminEditPhoto', {
		template: 'editPhoto',
		path: '/admin/editPhoto',
		layoutTemplate: "photoLayout",
    waitOn: function(){
      return Meteor.subscribe("allPhotos");
    }
	});
	this.route('adminDeletePhoto', {
		template: 'deletePhoto',
		path: '/admin/deletePhoto',
		layoutTemplate: "photoLayout",
    waitOn: function(){
      return Meteor.subscribe("allPhotos");
    }
	});
	this.route('home',{
		template: 'home',
		path: '/admin',
		layoutTemplate: "photoLayout",
    waitOn: function(){
      return Meteor.subscribe("allPhotos");
    }
	});
})
}

if(Meteor.isServer){


}