const router = require("express").Router();
const { Post, Market } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const marketData = await Market.findAll({
      where: {
        user_id: req.params.id,
      },
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
