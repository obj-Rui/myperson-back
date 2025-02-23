"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FormatResponseInterceptor = void 0;
var common_1 = require("@nestjs/common");
var rxjs_1 = require("rxjs");
var FormatResponseInterceptor = /** @class */ (function () {
    function FormatResponseInterceptor() {
    }
    FormatResponseInterceptor.prototype.intercept = function (context, next) {
        var response = context.switchToHttp().getResponse();
        return next.handle().pipe(rxjs_1.map(function (data) {
            return {
                code: response.statusCode,
                message: 'success',
                data: data
            };
        }));
    };
    FormatResponseInterceptor = __decorate([
        common_1.Injectable()
    ], FormatResponseInterceptor);
    return FormatResponseInterceptor;
}());
exports.FormatResponseInterceptor = FormatResponseInterceptor;
