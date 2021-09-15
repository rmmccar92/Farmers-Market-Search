const User = require("./User");
const Market = require("./Market");
const Item = require("./Item");

Market.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Market, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

module.exports = { User, Market, Item };
