const router = require("express").Router();
const { User, Market, Item } = require("../models");
// Middleware goes here

// All markets
router.get("/", async (req, res) => {
  try {
    const marketData = await Market.findAll({
      // Included models/attributes will go here
    });
    const markets = marketData.map((market) => market.get({ plain: true }));
    res.render("homepage", {
      markets,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Single Markets

router.get("/", async (req, res) => {
  try {
    const marketData = await Market.findByPk(req.params.id, {
      //   Included models/attributes will go here
    });
    if (marketData) {
      const market = marketData.get({ plain: true });
      res.render("market", { market });
    } else {
      res.status(404).json({ message: "Market not found." }).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
// Account login and signup
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});
module.exports = router;
