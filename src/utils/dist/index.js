"use strict";
exports.__esModule = true;
exports.md5 = void 0;
var crypto = require("crypto");
function md5(str) {
    var hash = crypto.createHash('md5');
    hash.update(str);
    return hash.digest('hex');
}
exports.md5 = md5;
