"use strict";
exports.__esModule = true;
exports.generateParseIntPipe = exports.md5 = void 0;
var common_1 = require("@nestjs/common");
var crypto = require("crypto");
function md5(str) {
    var hash = crypto.createHash('md5');
    hash.update(str);
    return hash.digest('hex');
}
exports.md5 = md5;
function generateParseIntPipe(name) {
    return new common_1.ParseIntPipe({
        exceptionFactory: function () {
            throw new common_1.BadRequestException(name + ' 应该传数字');
        }
    });
}
exports.generateParseIntPipe = generateParseIntPipe;
