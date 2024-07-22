"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginUserVo = void 0;
var swagger_1 = require("@nestjs/swagger");
var UserInfo = /** @class */ (function () {
    function UserInfo() {
    }
    __decorate([
        swagger_1.ApiProperty()
    ], UserInfo.prototype, "id");
    __decorate([
        swagger_1.ApiProperty({ example: 'zhangsan' })
    ], UserInfo.prototype, "username");
    __decorate([
        swagger_1.ApiProperty({ example: '张三' })
    ], UserInfo.prototype, "nickName");
    __decorate([
        swagger_1.ApiProperty({ example: 'xx@xx.com' })
    ], UserInfo.prototype, "email");
    __decorate([
        swagger_1.ApiProperty({ example: 'xxx.png' })
    ], UserInfo.prototype, "headPic");
    __decorate([
        swagger_1.ApiProperty({ example: '13233333333' })
    ], UserInfo.prototype, "phoneNumber");
    __decorate([
        swagger_1.ApiProperty()
    ], UserInfo.prototype, "isFrozen");
    __decorate([
        swagger_1.ApiProperty()
    ], UserInfo.prototype, "isAdmin");
    __decorate([
        swagger_1.ApiProperty()
    ], UserInfo.prototype, "createTime");
    __decorate([
        swagger_1.ApiProperty({ example: ['管理员'] })
    ], UserInfo.prototype, "roles");
    __decorate([
        swagger_1.ApiProperty({ example: 'query_aaa' })
    ], UserInfo.prototype, "permissions");
    return UserInfo;
}());
var LoginUserVo = /** @class */ (function () {
    function LoginUserVo() {
    }
    __decorate([
        swagger_1.ApiProperty()
    ], LoginUserVo.prototype, "userInfo");
    __decorate([
        swagger_1.ApiProperty()
    ], LoginUserVo.prototype, "accessToken");
    __decorate([
        swagger_1.ApiProperty()
    ], LoginUserVo.prototype, "refreshToken");
    return LoginUserVo;
}());
exports.LoginUserVo = LoginUserVo;
