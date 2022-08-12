const express = require('express');
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();

app.set("view engine", "ejs");
app.use(cookieParser('1234'));
app.use(session({
    secret: 'secret key',
    // resave: false,
    // saveUninitialized:true,
}))
app.get("/login", (req, res) => {
    res.render("login");
})
app.post("/login", (req, res) => {
    var flag = true;
    if (flag) res.redirect("profile");
    else res.redirect("login");
});

app.get("/profile", (req, res) => {
    if (req.session.id == undefined || req.session.id == "") {
        res.redirect("/login");
        return false;
    }
    req.session.id 로 작업
    res.render("profile");
})

app.get("/main", (req, res) => {

})
app.listen(8000, () => {
    console.log("Server : ", 8000);
})