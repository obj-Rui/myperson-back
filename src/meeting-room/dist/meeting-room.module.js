"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MeetingRoomModule = void 0;
var common_1 = require("@nestjs/common");
var meeting_room_service_1 = require("./meeting-room.service");
var meeting_room_controller_1 = require("./meeting-room.controller");
var typeorm_1 = require("@nestjs/typeorm");
var meeting_room_entity_1 = require("./entities/meeting-room.entity");
var MeetingRoomModule = /** @class */ (function () {
    function MeetingRoomModule() {
    }
    MeetingRoomModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([meeting_room_entity_1.MeetingRoom])],
            controllers: [meeting_room_controller_1.MeetingRoomController],
            providers: [meeting_room_service_1.MeetingRoomService]
        })
    ], MeetingRoomModule);
    return MeetingRoomModule;
}());
exports.MeetingRoomModule = MeetingRoomModule;
