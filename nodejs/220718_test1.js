const os = require("os");
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.tmpdir());

const path = require("path");
const string1 = __filename;
const string2 = __dirname;
console.log(path.sep);
console.log(path.extname(string1));
console.log(path.parse(string1));