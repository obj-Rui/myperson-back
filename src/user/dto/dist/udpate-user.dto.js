"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UpdateUserDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var UpdateUserDto = /** @class */ (function () {
    function UpdateUserDto() {
    }
    __decorate([
        swagger_1.ApiProperty()
    ], UpdateUserDto.prototype, "nickName");
    __decorate([
        class_validator_1.IsNotEmpty({
            message: '邮箱不能为空'
        }),
        class_validator_1.IsEmail({}, {
            message: '不是合法的邮箱格式'
        }),
        swagger_1.ApiProperty()
    ], UpdateUserDto.prototype, "email");
    __decorate([
        class_validator_1.IsNotEmpty({
            message: '验证码不能为空'
        }),
        swagger_1.ApiProperty()
    ], UpdateUserDto.prototype, "captcha");
    return UpdateUserDto;
}());
exports.UpdateUserDto = UpdateUserDto;
