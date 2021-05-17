exports.up = function(db) {
  return Promise.all([
        db.schema.createTable("users", function(t) {
          t.increments("userId").primary();
          t.string("firstName", 100);
          t.string("lastName", 100);
          t.text("email");
          t.string("city", 100);
          t.string("state", 100);
          t.string("country", 100);
          t.text("bio");
          t.string("mobile", 20);
          t.text("website");
          t.text("password");
          t.text("connectionId");
          t.text("profileImagePath");
          t.text("facebookProfileUrl");
          t.text("twitterProfileUrl");
          t.text("linkedInProfileUrl");
          t.text("googlePlusProfileUrl");
          t.text("instagramProfileUrl");
          t.text("youtubeProfileUrl");
          t.text("dribbleProfileUrl");
          t.timestamp("lastLogin");
          t.timestamp("createdOn");
        }),

        db.schema.createTable("groups", function(t) {
          t.increments("groupId").primary();
          t.string("groupName", 100);
          t.text("description");
          t.timestamp("createdOn");
          t.integer("createdBy");
        }),

        db.schema.createTable("groupMembers", function(t) {
          t.increments("groupMemberId").primary();
          t.integer("groupId");
          t.integer("memberId");
          t.timestamp("addedOn");
          t.integer("addedBy");
        }),

        db.schema.createTable("messages", function(t) {
          t.increments("messageId").primary();
          t.integer("senderId");
          t.integer("receiverId");
          t.boolean("isGroupChat");
          t.text("message");
          t.integer("messageType");
          t.timestamp("sendDate");
        }),

        db.schema.createTable("linkMetadata", function(t) {
          t.increments("Id").primary();
          t.text("url");
          t.text("author", 20);
          t.timestamp("date");
          t.text("description");
          t.text("imagePath");
          t.text("logo");
          t.text("publisher");
          t.text("title");
          t.text("audio");
          t.text("video");
          t.timestamp("addedDate");
        })])
};

exports.down = function (db) {
  return Promise.all([
    db.schema.dropTable("users"),
    db.schema.dropTable("groups"),
    db.schema.dropTable("groupMembers"),
    db.schema.dropTable("messages"),
    db.schema.dropTable("linkMetadata")
  ]);
};
