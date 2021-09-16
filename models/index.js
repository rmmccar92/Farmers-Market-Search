const User = require("./User");
const Market = require("./Market");
// const Item = require("./Item");

User.hasMany(Market, {
  onDelete: "CASCADE",
});

Market.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Market };
