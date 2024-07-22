"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UnloginFilter = exports.UnLoginException = void 0;
var common_1 = require("@nestjs/common");
var UnLoginException = /** @class */ (function () {
    function UnLoginException(message) {
        this.message = message;
    }
    return UnLoginException;
}());
exports.UnLoginException = UnLoginException;
var UnloginFilter = /** @class */ (function () {
    function UnloginFilter() {
    }
    UnloginFilter.prototype["catch"] = function (exception, host) {
        var response = host.switchToHttp().getResponse();
        response
            .json({
            code: common_1.HttpStatus.UNAUTHORIZED,
            message: 'fail',
            data: exception.message || '用户未登录'
        })
            .end();
    };
    UnloginFilter = __decorate([
        common_1.Catch(UnLoginException)
    ], UnloginFilter);
    return UnloginFilter;
}());
exports.UnloginFilter = UnloginFilter;
