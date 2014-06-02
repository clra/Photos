var imageStore = new FS.Store.FileSystem("images", {
  //path: "public/images", //optional, default is "/cfs/files" path within app container
  //transformRead: myTransformReadFunction, //optional
  maxTries: 1 //optional, default 5
});

Images = new FS.Collection("images", {
  stores: [imageStore]
});

Images.allow({
  insert: function(url, userId) {
    return true;
  },
  update: function(url, userId) {
    //return doc.owner === userId;
    return true;
  },
  remove: function(url, userId){
    return true;
  },
  download: function(url, userId) {
    return true;
  },
  fetch: []
});