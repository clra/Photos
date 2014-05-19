var generalPermissions = {
  insert: function(title, url, description, userId){
    return true;
  },
  update: function(title, url, description, userId){
    //if (doc.userId !== userId) return false;
    return true;
  },
  remove: function(title, url, description, userId){
    return true;
  }
};

Photos.allow(generalPermissions);
