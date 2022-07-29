const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static("uploads"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            console.log("destination:", req.body);
            done(null, 'uploads/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, req.body.ID + ext);
        }
    }),
    limits: { fileSize: 5 * 1024 * 1024 }
})

app.get("/", function (req, res) {
    res.render("test36");
})
app.post("/register", upload.single('userfile'), function (req, res) {
    res.render("register", { filename: req.file.filename });
})
app.get("/register", function (req, res) {
    res.render("register", { filename: "asdf.jpg" });
})
app.listen(port, () => {
    console.log("Server Port : ", port);
})