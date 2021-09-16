const router = require("express").Router();
const userRoutes = require("./userRoutes");
// const marketRoutes = require('./marketRoutes');

router.use("/users", userRoutes);
// router.use('/markets', marketRoutes);

module.exports = router;
