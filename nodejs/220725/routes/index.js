const express = require("express");
const router = express.Router();
const user = require("../controller/UserController");

router.get("/", function (req, res) {
    res.send("main page_index");
});
router.get("/receive", user.get_user);

module.exports = router;