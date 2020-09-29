const express = require("express");

// Create router
const router = express.Router();

const index_controller = require("../controllers/index_controller");

router.get("/", index_controller.index);

router.get("/about", index_controller.about);

// router.get("/", (req, res) => {
//     res.json({"msg": "Hello, welcome to my API"});
// });

// router.get("/about", (req, res) => {
//     res.json(rest.success("You get some data"))
// })

module.exports = router;