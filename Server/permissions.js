var generalPermissions = {
  insert: function(userId, doc, fieldNames, modifier){
    return true;
  },
  update: function(userId, doc, fieldNames, modifier){
    //if (doc.userId !== userId) return false;
    return true;
  },
  remove: function(userId, doc, fieldNames, modifier){
    return true;
  }
};

photos.allow(generalPermissions);
