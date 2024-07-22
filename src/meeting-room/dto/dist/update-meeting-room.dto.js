"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UpdateMeetingRoomDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var create_meeting_room_dto_1 = require("./create-meeting-room.dto");
var class_validator_1 = require("class-validator");
var UpdateMeetingRoomDto = /** @class */ (function (_super) {
    __extends(UpdateMeetingRoomDto, _super);
    function UpdateMeetingRoomDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsNotEmpty({
            message: 'id 不能为空'
        })
    ], UpdateMeetingRoomDto.prototype, "id");
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.MaxLength(50, {
            message: '设备最长为 50 字符'
        })
    ], UpdateMeetingRoomDto.prototype, "equipment");
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.MaxLength(100, {
            message: '描述最长为 100 字符'
        })
    ], UpdateMeetingRoomDto.prototype, "description");
    return UpdateMeetingRoomDto;
}(swagger_1.PickType(create_meeting_room_dto_1.CreateMeetingRoomDto, [
    'name',
    'location',
    'capacity',
])));
exports.UpdateMeetingRoomDto = UpdateMeetingRoomDto;
