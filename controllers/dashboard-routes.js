const router = require("express").Router();
const { User, Market } = require("../models");
const withAuth = require("../utils/auth");

// router.get("/", withAuth, async (req, res) => {
//   try {
//     res.render("user", {
//       layout: "dashboard",
//       user,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get("/user/:id", withAuth, async (req, res) => {
//   try {
//     const userData = await User.findByPk({
//       where: {
//         user_id: req.params.user_id,
//       },
//       attributes: {
//         exclude: ["password"],
//         include: [{ model: Market, attributes: ["market_name"] }],
//       },
//     });
//     const user = userData.map((user) => user.get({ plain: true }));
//     res.render("user", {
//       layout: "dashboard",
//       user,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

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

module.exports = router;
