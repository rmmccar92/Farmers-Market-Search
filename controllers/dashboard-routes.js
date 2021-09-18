const router = require("express").Router();
const { User, Market } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    res.render("homepage", {
      layout: "dashboard",
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk({
      where: {
        user_id: req.params.user_id,
      },
      attributes: {
        exclude: ["password"],
        include: [{ model: Market, attributes: ["market_name"] }],
      },
    });
    const user = userData.map((user) => user.get({ plain: true }));
    res.render("user-page", {
      layout: "dashboard",
      user,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
