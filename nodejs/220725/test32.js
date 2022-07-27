const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

const fs = require("fs")
const data = 'userId//name//userPw'
fs.writeFile('info.txt', data, 'utf8', function (err) {
    console.log('회원정보 저장');
});

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.render("test32");
})

app.get("/receive", function (req, res) {
    console.log(req.query);
    let name = req.query.name;
    let msg = req.query.name + "님 회원가입했습니다.";
    res.send({ name: name, message: msg });
})

app.listen(port, () => {
    console.log("Server Port : ", port);
})