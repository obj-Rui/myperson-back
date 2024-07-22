"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Booking = void 0;
var meeting_room_entity_1 = require("src/meeting-room/entities/meeting-room.entity");
var user_entity_1 = require("src/user/entities/user.entity");
var typeorm_1 = require("typeorm");
var Booking = /** @class */ (function () {
    function Booking() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Booking.prototype, "id");
    __decorate([
        typeorm_1.Column({
            comment: '会议开始时间'
        })
    ], Booking.prototype, "startTime");
    __decorate([
        typeorm_1.Column({
            comment: '会议结束时间'
        })
    ], Booking.prototype, "endTime");
    __decorate([
        typeorm_1.Column({
            length: 20,
            comment: '状态（申请中、审批通过、审批驳回、已解除）',
            "default": '申请中'
        })
    ], Booking.prototype, "status");
    __decorate([
        typeorm_1.Column({
            length: 100,
            comment: '备注',
            "default": ''
        })
    ], Booking.prototype, "note");
    __decorate([
        typeorm_1.ManyToOne(function () { return user_entity_1.User; })
    ], Booking.prototype, "user");
    __decorate([
        typeorm_1.ManyToOne(function () { return meeting_room_entity_1.MeetingRoom; })
    ], Booking.prototype, "room");
    __decorate([
        typeorm_1.CreateDateColumn({
            comment: '创建时间'
        })
    ], Booking.prototype, "createTime");
    __decorate([
        typeorm_1.UpdateDateColumn({
            comment: '更新时间'
        })
    ], Booking.prototype, "updateTime");
    Booking = __decorate([
        typeorm_1.Entity()
    ], Booking);
    return Booking;
}());
exports.Booking = Booking;
