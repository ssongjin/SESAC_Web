const express = require("express");
const router = express.Router();
const user = require("../controller/UserController");

router.get("/", function (req, res) {
    res.send("main page_index");
});
router.get("/receive", user.get_user);

app.get('/login_check', (req, res) => {
    var id = req.query.id;
    var pw = req.query.pw;
    var comment = req.query.comment;

    res.send(`id : ${id}, pw : ${pw}, comment : ${comment}`);
})

module.exports = router;