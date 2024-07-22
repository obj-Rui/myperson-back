"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InvokeRecordInterceptor = void 0;
var common_1 = require("@nestjs/common");
var rxjs_1 = require("rxjs");
var InvokeRecordInterceptor = /** @class */ (function () {
    function InvokeRecordInterceptor() {
        this.logger = new common_1.Logger(InvokeRecordInterceptor_1.name);
    }
    InvokeRecordInterceptor_1 = InvokeRecordInterceptor;
    InvokeRecordInterceptor.prototype.intercept = function (context, next) {
        var _this = this;
        var _a, _b;
        var request = context.switchToHttp().getRequest();
        var response = context.switchToHttp().getResponse();
        var userAgent = request.headers['user-agent'];
        var ip = request.ip, method = request.method, path = request.path;
        this.logger.debug(method + " " + path + " " + ip + " " + userAgent + ": " + context.getClass().name + " " + context.getHandler().name + " invoked...");
        this.logger.debug("user: " + ((_a = request.user) === null || _a === void 0 ? void 0 : _a.userId) + ", " + ((_b = request.user) === null || _b === void 0 ? void 0 : _b.username));
        var now = Date.now();
        return next.handle().pipe(rxjs_1.tap(function (res) {
            _this.logger.debug(method + " " + path + " " + ip + " " + userAgent + ": " + response.statusCode + ": " + (Date.now() - now) + "ms");
            _this.logger.debug("Response: " + JSON.stringify(res));
        }));
    };
    var InvokeRecordInterceptor_1;
    InvokeRecordInterceptor = InvokeRecordInterceptor_1 = __decorate([
        common_1.Injectable()
    ], InvokeRecordInterceptor);
    return InvokeRecordInterceptor;
}());
exports.InvokeRecordInterceptor = InvokeRecordInterceptor;
