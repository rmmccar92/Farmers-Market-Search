const sequelize = require('../config/connection');
const { User, Market } = require('../models');

const userData = require('./userData.json');
const marketData = require('./marketData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const market of marketData) {
    await Market.create({
      ...market,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
