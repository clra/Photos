
if(Meteor.isClient){

Router.map(function() {
	this.route('adminAddPhoto', {
		template: 'addPhoto',
		path: '/admin/addPhoto',
		layoutTemplate: "photoLayout"
	});
	this.route('adminEditPhoto', {
		template: 'editPhoto',
		path: '/admin/editPhoto',
		layoutTemplate: "photoLayout"
	});
	this.route('adminDeletePhoto', {
		template: 'deletePhoto',
		path: '/admin/deletePhoto',
		layoutTemplate: "photoLayout"
	});
})
}