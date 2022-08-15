const mysql = require("mysql");

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'sesac'
});

exports.get_visitors = (cb) => {
    cnn.query('SELECT * FROM visitor', (err, rows) => {
        if (err) throw err;
        cb(rows);
    })
}

exports.insert = (name, comment, cb) => {
    let sql = "INSERT INTO visitor (name, comment) VALUES ('" + name + "', '" + comment + "')";
    cnn.query(sql, (err, rows) => {
        if (err) throw err;
        console.log("INSERT : ", rows);
        cb(rows.insertId);
    })
}

exports.get_visitor = (id, cb) => {
    cnn.query(`SELECT * FROM visitor WHERE id = ${id} LIMIT 1`, (err, rows) => {
        if (err) throw err;
        cb(rows);
    })
}

exports.update = (id, name, comment, cb) => {
    let sql = `UPDATE visitor SET name = '${name}', comment = '${comment}' WHERE id = ${id}`;
    cnn.query(sql, (err, rows) => {
        if (err) throw err;
        cb(rows);
    })
}

exports.delete = (id, cb) => {
    cnn.query(`DELETE from visitor WHERE id = ${id}`, (err, rows) => {
        if (err) throw err;
        cb(rows);
    })
}