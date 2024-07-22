"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserListVo = void 0;
var swagger_1 = require("@nestjs/swagger");
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        swagger_1.ApiProperty()
    ], User.prototype, "id");
    __decorate([
        swagger_1.ApiProperty()
    ], User.prototype, "username");
    __decorate([
        swagger_1.ApiProperty()
    ], User.prototype, "nickName");
    __decorate([
        swagger_1.ApiProperty()
    ], User.prototype, "email");
    __decorate([
        swagger_1.ApiProperty()
    ], User.prototype, "phoneNumber");
    __decorate([
        swagger_1.ApiProperty()
    ], User.prototype, "isFrozen");
    __decorate([
        swagger_1.ApiProperty()
    ], User.prototype, "headPic");
    __decorate([
        swagger_1.ApiProperty()
    ], User.prototype, "createTime");
    return User;
}());
var UserListVo = /** @class */ (function () {
    function UserListVo() {
    }
    __decorate([
        swagger_1.ApiProperty({
            type: [User]
        })
    ], UserListVo.prototype, "users");
    __decorate([
        swagger_1.ApiProperty()
    ], UserListVo.prototype, "totalCount");
    return UserListVo;
}());
exports.UserListVo = UserListVo;
