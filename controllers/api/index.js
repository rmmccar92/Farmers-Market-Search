const router = require("express").Router();
const userRoutes = require("./user-routes");
// const marketRoutes = require('./market-routes');

router.use("/users", userRoutes);
// router.use('/markets', marketRoutes);

module.exports = router;
