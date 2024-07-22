"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CustomExceptionFilter = void 0;
var common_1 = require("@nestjs/common");
var CustomExceptionFilter = /** @class */ (function () {
    function CustomExceptionFilter() {
    }
    CustomExceptionFilter.prototype["catch"] = function (exception, host) {
        var _a, _b;
        var response = host.switchToHttp().getResponse();
        response.statusCode = exception.getStatus();
        var res = exception.getResponse();
        response
            .json({
            code: exception.getStatus(),
            message: 'fail',
            data: ((_a = res === null || res === void 0 ? void 0 : res.message) === null || _a === void 0 ? void 0 : _a.join) ? (_b = res === null || res === void 0 ? void 0 : res.message) === null || _b === void 0 ? void 0 : _b.join(',') : exception.message
        })
            .end();
    };
    CustomExceptionFilter = __decorate([
        common_1.Catch(common_1.HttpException)
    ], CustomExceptionFilter);
    return CustomExceptionFilter;
}());
exports.CustomExceptionFilter = CustomExceptionFilter;
