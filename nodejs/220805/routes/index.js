const express = require("express");
const visitor = require("../controller/VisitorController");
const router = express.Router();

router.get("/", visitor.index);
router.post("/write", visitor.post_comment);
router.get("/get", visitor.get_visitor);
router.patch("/edit", visitor.patch_comment);
router.delete("/delete", visitor.delete_comment);
module.exports = router;