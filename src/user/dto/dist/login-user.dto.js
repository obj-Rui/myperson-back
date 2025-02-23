"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginUserDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var LoginUserDto = /** @class */ (function () {
    function LoginUserDto() {
    }
    __decorate([
        class_validator_1.IsNotEmpty({
            message: '用户名不能为空'
        }),
        swagger_1.ApiProperty()
    ], LoginUserDto.prototype, "username");
    __decorate([
        class_validator_1.IsNotEmpty({
            message: '密码不能为空'
        }),
        swagger_1.ApiProperty()
    ], LoginUserDto.prototype, "password");
    return LoginUserDto;
}());
exports.LoginUserDto = LoginUserDto;
