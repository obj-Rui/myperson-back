"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateMeetingRoomDto = void 0;
var class_validator_1 = require("class-validator");
var CreateMeetingRoomDto = /** @class */ (function () {
    function CreateMeetingRoomDto() {
    }
    __decorate([
        class_validator_1.IsNotEmpty({
            message: '会议室名称不能为空'
        }),
        class_validator_1.MaxLength(10, {
            message: '会议室名称最长为 10 字符'
        })
    ], CreateMeetingRoomDto.prototype, "name");
    __decorate([
        class_validator_1.IsNotEmpty({
            message: '容量不能为空'
        })
    ], CreateMeetingRoomDto.prototype, "capacity");
    __decorate([
        class_validator_1.IsNotEmpty({
            message: '位置不能为空'
        }),
        class_validator_1.MaxLength(50, {
            message: '位置最长为 50 字符'
        })
    ], CreateMeetingRoomDto.prototype, "location");
    __decorate([
        class_validator_1.IsNotEmpty({
            message: '设备不能为空'
        }),
        class_validator_1.MaxLength(50, {
            message: '设备最长为 50 字符'
        })
    ], CreateMeetingRoomDto.prototype, "equipment");
    __decorate([
        class_validator_1.IsNotEmpty({
            message: '描述不能为空'
        }),
        class_validator_1.MaxLength(100, {
            message: '描述最长为 100 字符'
        })
    ], CreateMeetingRoomDto.prototype, "description");
    return CreateMeetingRoomDto;
}());
exports.CreateMeetingRoomDto = CreateMeetingRoomDto;
