"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppController = void 0;
var common_1 = require("@nestjs/common");
var custom_decorator_1 = require("./custom.decorator");
var AppController = /** @class */ (function () {
    function AppController(appService) {
        this.appService = appService;
    }
    AppController.prototype.getHello = function () {
        return this.appService.getHello();
    };
    AppController.prototype.aaa = function () {
        return this.appService.getHello();
    };
    AppController.prototype.bbb = function () {
        return this.appService.getHello();
    };
    __decorate([
        common_1.Get()
    ], AppController.prototype, "getHello");
    __decorate([
        common_1.Get('aa'),
        custom_decorator_1.RequireLogin()
    ], AppController.prototype, "aaa");
    __decorate([
        common_1.Get('bb'),
        common_1.SetMetadata('require-login', true)
    ], AppController.prototype, "bbb");
    AppController = __decorate([
        common_1.Controller()
    ], AppController);
    return AppController;
}());
exports.AppController = AppController;
