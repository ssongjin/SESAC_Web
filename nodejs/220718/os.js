const os = require("os");
console.log(os.hostname());
/*os는 외장모듈이기 때문에, 불러와서 사용해야 함*/

const path = require("path");
const string = __filename;
console.log(path.extname(string));
/*path도 외장모듈*/
