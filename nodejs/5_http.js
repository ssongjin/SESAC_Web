const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    fs.readFile('./test2.html', function (err, data) {
        if (err) {
            //promise에서의 catch
            console.error(err);
            res.writeHead(404);
            res.end(err.message);
        }
        else {
            //promise에서의 try
            res.writeHead(200);
            res.end(data);
        }
    });
});

server.listen(8000, function () {
    console.log("8000번 포트");
})

server.on("connection", function () {
    console.log("Client Connection");
})

server.on("checkContinue", function () {
    console.log("Client checkContinue");
})