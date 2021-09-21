const router = require("express").Router();
const { User, Market } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  res.render("splashpage");
});

router.get("/home", withAuth, async (req, res) => {
  try {
    const marketData = await Market.findAll({
      include: [{ model: User, attributes: { exclude: ["password"] } }],
      order: [["market_name", "ASC"]],
    });

    const markets = marketData.map((market) => market.get({ plain: true }));

    res.render("all-markets", {
      markets,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/add", withAuth, (req, res) => {
  res.render("new-market", {
    layout: "dashboard",
    logged_in: req.session.logged_in,
  });
});

// Account login and signup
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});
module.exports = router;
