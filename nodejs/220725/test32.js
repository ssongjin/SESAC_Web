const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", function (req, res) {
    res.render("test32");
})

app.use("/receive", function (req, res) {
    console.log(req.query);
    let name = req.body.name;
    let msg = req.body.name + "님 회원가입했습니다.";
    res.send({ name: name, message: msg });
})
app.use("/register", function (req, res) {
    const data = req.body.userId + "//" + req.query.name + "//" + req.query.userPw;
    const fs = require('fs');
    fs.writeFile("info.txt", data, "utf8", function (err) {
        if (err) {
            console.log(err);
        }
    });
})

app.listen(port, () => {
    console.log("Server Port : ", port);
})