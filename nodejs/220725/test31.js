const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.render("test31");
})
app.post("/user_info", function (req, res) {
    var name = req.body.name;
    var gender = req.body.gender;
    var birthday = req.body.birthday;
    var color = req.body.color;

    res.send('')
})




app.listen(port, () => {
    console.log("Server Port : ", port);
})