"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MeetingRoom = void 0;
var typeorm_1 = require("typeorm");
var MeetingRoom = /** @class */ (function () {
    function MeetingRoom() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({
            comment: '会议室ID'
        })
    ], MeetingRoom.prototype, "id");
    __decorate([
        typeorm_1.Column({
            length: 50,
            comment: '会议室名字'
        })
    ], MeetingRoom.prototype, "name");
    __decorate([
        typeorm_1.Column({
            comment: '会议室容量'
        })
    ], MeetingRoom.prototype, "capacity");
    __decorate([
        typeorm_1.Column({
            length: 50,
            comment: '会议室位置'
        })
    ], MeetingRoom.prototype, "location");
    __decorate([
        typeorm_1.Column({
            length: 50,
            comment: '设备',
            "default": ''
        })
    ], MeetingRoom.prototype, "equipment");
    __decorate([
        typeorm_1.Column({
            length: 100,
            comment: '描述',
            "default": ''
        })
    ], MeetingRoom.prototype, "description");
    __decorate([
        typeorm_1.Column({
            comment: '是否被预订',
            "default": false
        })
    ], MeetingRoom.prototype, "isBooked");
    __decorate([
        typeorm_1.CreateDateColumn({
            comment: '创建时间'
        })
    ], MeetingRoom.prototype, "createTime");
    __decorate([
        typeorm_1.UpdateDateColumn({
            comment: '更新时间'
        })
    ], MeetingRoom.prototype, "updateTime");
    MeetingRoom = __decorate([
        typeorm_1.Entity()
    ], MeetingRoom);
    return MeetingRoom;
}());
exports.MeetingRoom = MeetingRoom;
