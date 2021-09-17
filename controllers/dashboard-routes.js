const router = require("express").Router();
const { User, Market } = require("../models");
const withAuth = require("../utils/auth");

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
