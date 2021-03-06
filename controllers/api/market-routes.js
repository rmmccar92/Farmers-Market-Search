const router = require("express").Router();
const { Market, User } = require("../../models");
const withAuth = require("../../utils/auth");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
router.get("/", async (req, res) => {
  try {
    const marketData = await Market.findAll();
    res.status(200).json(marketData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const marketData = await Market.findByPk(req.params.id, {
      include: [{ model: User, attributes: { exclude: ["password"] } }],
    });

    if (!marketData) {
      res.status(404).json({ message: "No user found with this id!" });
      return;
    }

    res.status(200).json(marketData);
  } catch (err) {
    res.status(500).json(err);
  }
});

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

router.delete("/:id", async (req, res) => {
  // delete one product by its `id` value
  try {
    const marketData = await Market.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!marketData) {
      res.status(404).json({ message: "Market not found!" });
      return;
    }
    res.status(200).json({ message: "Product removed." });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
