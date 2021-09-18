const router = require("express").Router();
const { Market } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
  try {
    const marketData = await Market.findAll();
    res.status(200).json(marketData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get(":/id"),
  async (req, res) => {
    try {
      const marketData = await Market.findByPk({});
      if (!marketData) {
        res.status(404).json({ message: "Market not found." }).end();
      }
      res.status(200).json(marketData);
    } catch (err) {
      res.status(500).json(err);
    }
  };

router.post("/", withAuth, async (req, res) => {
  try {
    const marketData = await Market.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(marketData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete(":/id", async (req, res) => {
  try {
    const marketData = await Market.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!marketData) {
      res.status(404).json({ message: "Market not found." });
    }
    res.status(200).json({ message: "Market deleted." }).end();
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
