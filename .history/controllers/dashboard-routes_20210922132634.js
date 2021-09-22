const router = require("express").Router();
const { User, Market } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Market }],
    });

    const user = userData.get({ plain: true });

    res.render("user", {
      layout: "dashboard",
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/market/:id", withAuth, async (req, res) => {
  try {
    const marketData = await Market.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    const market = marketData.get({ plain: true });

    res.render("market", {
      layout: "dashboard",
      ...market,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/market", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Market }],
    });
    const user = userData.get({ plain: true });

    res.render("market", {
      layout: "dashboard",
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("market/search", withAuth, async (req, res) => {
  try {
    const marketData = await Market.findAll({
      where: {
        zipcode: req.params.zipcode,
      },
      include: [{ model: User, attributes: { exclude: ["password"] } }],
    });
    res.render("market", {
      layout: "dashboard",
      marketData,
    });
  } catch (err) {
    res.status(500).json(err).end();
  }
});

module.exports = router;
