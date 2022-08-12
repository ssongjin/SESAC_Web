const { connect } = require("http2");

const fs = require("fs").promises;

exports.register = (data, cb) => {
    const { id, pw, name, email } = data;
    let sql = `INSERT INTO user VALUES("${id}","${pw}","${name}","${age}")`;
    cnn.query(sql, (err, rows) => {
        if (err) throw err;
        cb(rows);
    })
}

// exports.post_user = function (data) {
//     const { id, pw, name, age } = data;
//     fs.writeFile("./info.txt", `${id}//${pw}//${name}//${age}`);
// }

// exports.get_user = async function () {
//     var buffer = await fs.readFile("./info.txt");
//     return buffer.toString();
// }