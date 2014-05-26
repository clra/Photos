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

/* var userPermissions = {
  insert: function(userId, userPassword){
    return true;
  },
  update: function(userId, userPassword){
    return true;
  },
  remove: function(userId, userPassword){
    return true;
  }
 }; 
} */

Photos.allow(generalPermissions);
Meteor.users.allow(generalPermissions);

