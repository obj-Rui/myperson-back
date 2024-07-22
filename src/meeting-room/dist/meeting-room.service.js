"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.MeetingRoomService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var meeting_room_entity_1 = require("./entities/meeting-room.entity");
var typeorm_2 = require("typeorm");
var booking_entity_1 = require("src/booking/entities/booking.entity");
var MeetingRoomService = /** @class */ (function () {
    function MeetingRoomService() {
    }
    MeetingRoomService.prototype.initData = function () {
        var room1 = new meeting_room_entity_1.MeetingRoom();
        room1.name = '木星';
        room1.capacity = 10;
        room1.equipment = '白板';
        room1.location = '一层西';
        var room2 = new meeting_room_entity_1.MeetingRoom();
        room2.name = '金星';
        room2.capacity = 5;
        room2.equipment = '';
        room2.location = '二层东';
        var room3 = new meeting_room_entity_1.MeetingRoom();
        room3.name = '天王星';
        room3.capacity = 30;
        room3.equipment = '白板，电视';
        room3.location = '三层东';
        this.repository.insert([room1, room2, room3]);
    };
    MeetingRoomService.prototype.find = function (pageNo, pageSize, name, capacity, equipment) {
        return __awaiter(this, void 0, void 0, function () {
            var skipCount, condition, _a, meetingRooms, totalCount;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (pageNo < 1) {
                            throw new common_1.BadRequestException('页码最小为 1');
                        }
                        skipCount = (pageNo - 1) * pageSize;
                        condition = {};
                        if (name) {
                            condition.name = typeorm_2.Like("%" + name + "%");
                        }
                        if (equipment) {
                            condition.equipment = typeorm_2.Like("%" + equipment + "%");
                        }
                        if (capacity) {
                            condition.capacity = capacity;
                        }
                        return [4 /*yield*/, this.repository.findAndCount({
                                skip: skipCount,
                                take: pageSize,
                                where: condition
                            })];
                    case 1:
                        _a = _b.sent(), meetingRooms = _a[0], totalCount = _a[1];
                        return [2 /*return*/, {
                                meetingRooms: meetingRooms,
                                totalCount: totalCount
                            }];
                }
            });
        });
    };
    MeetingRoomService.prototype.create = function (meetingRoomDto) {
        return __awaiter(this, void 0, void 0, function () {
            var room;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOneBy({
                            name: meetingRoomDto.name
                        })];
                    case 1:
                        room = _a.sent();
                        if (room) {
                            throw new common_1.BadRequestException('会议室名字已存在');
                        }
                        return [4 /*yield*/, this.repository.save(meetingRoomDto)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MeetingRoomService.prototype.update = function (meetingRoomDto) {
        return __awaiter(this, void 0, void 0, function () {
            var meetingRoom;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOneBy({
                            id: meetingRoomDto.id
                        })];
                    case 1:
                        meetingRoom = _a.sent();
                        if (!meetingRoom) {
                            throw new common_1.BadRequestException('会议室不存在');
                        }
                        meetingRoom.capacity = meetingRoomDto.capacity;
                        meetingRoom.location = meetingRoomDto.location;
                        meetingRoom.name = meetingRoomDto.name;
                        if (meetingRoomDto.description) {
                            meetingRoom.description = meetingRoomDto.description;
                        }
                        if (meetingRoomDto.equipment) {
                            meetingRoom.equipment = meetingRoomDto.equipment;
                        }
                        return [4 /*yield*/, this.repository.update({
                                id: meetingRoom.id
                            }, meetingRoom)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, 'success'];
                }
            });
        });
    };
    MeetingRoomService.prototype.findById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.repository.findOneBy({
                        id: id
                    })];
            });
        });
    };
    MeetingRoomService.prototype["delete"] = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var bookings, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.entityManager.findBy(booking_entity_1.Booking, {
                            room: {
                                id: id
                            }
                        })];
                    case 1:
                        bookings = _a.sent();
                        for (i = 0; i < bookings.length; i++) {
                            this.entityManager["delete"](booking_entity_1.Booking, bookings[i].id);
                        }
                        return [4 /*yield*/, this.repository["delete"](id)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, 'success'];
                }
            });
        });
    };
    __decorate([
        typeorm_1.InjectRepository(meeting_room_entity_1.MeetingRoom)
    ], MeetingRoomService.prototype, "repository");
    __decorate([
        typeorm_1.InjectEntityManager()
    ], MeetingRoomService.prototype, "entityManager");
    MeetingRoomService = __decorate([
        common_1.Injectable()
    ], MeetingRoomService);
    return MeetingRoomService;
}());
exports.MeetingRoomService = MeetingRoomService;
