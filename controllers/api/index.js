const router = require("express").Router();
const userRoutes = require("./user-routes");
const marketRoutes = require("./market-routes");

router.use("/user", userRoutes);
router.use("/markets", marketRoutes);

module.exports = router;
