const Visitor = require("../model/Visitor");

exports.index = (req, res) => {
    Visitor.get_visitors(function (result) {
        console.log(result);
        res.render("index", { data: result });
    });
}

exports.post_comment = (req, res) => {
    console.log(req.body);
    Visitor.insert(req.body.name, req.body.comment, function (result) {
        console.log(result);
        res.send({ id: result });
    });
}

exports.get_visitor = (req, res) => {
    Visitor.get_visitor(req.query.id, function (result) {
        console.log(result);
        res.send({ data: result[0] });
    });
}

exports.patch_comment = (req, res) => {
    console.log(req.body);
    const { id, name, comment } = req.body;
    Visitor.update(id, name, comment, function (result) {
        console.log(result);
        res.send("수정 성공");
    });
}

exports.delete_comment = (req, res) => {
    Visitor.delete(req.body.id, function (result) {
        console.log(result);
        res.send("삭제 성공");
    });
}