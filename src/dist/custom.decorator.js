"use strict";
exports.__esModule = true;
exports.UserInfo = exports.RequirePermission = exports.RequireLogin = void 0;
var common_1 = require("@nestjs/common");
var common_2 = require("@nestjs/common");
exports.RequireLogin = function () { return common_1.SetMetadata('require-login', true); };
exports.RequirePermission = function () {
    var permissions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        permissions[_i] = arguments[_i];
    }
    return common_1.SetMetadata('require-permission', permissions);
};
exports.UserInfo = common_2.createParamDecorator(function (data, ctx) {
    var request = ctx.switchToHttp().getRequest();
    if (!request.user) {
        return null;
    }
    return data ? request.user[data] : request.user;
});
