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
exports.BookingService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("typeorm");
var typeorm_2 = require("@nestjs/typeorm");
var user_entity_1 = require("src/user/entities/user.entity");
var meeting_room_entity_1 = require("src/meeting-room/entities/meeting-room.entity");
var booking_entity_1 = require("./entities/booking.entity");
var email_service_1 = require("src/email/email.service");
var redis_service_1 = require("src/redis/redis.service");
var BookingService = /** @class */ (function () {
    function BookingService() {
    }
    BookingService.prototype.initData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user1, user2, room1, room2, booking1, booking2, booking3, booking4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.entityManager.findOneBy(user_entity_1.User, {
                            id: 1
                        })];
                    case 1:
                        user1 = _a.sent();
                        return [4 /*yield*/, this.entityManager.findOneBy(user_entity_1.User, {
                                id: 2
                            })];
                    case 2:
                        user2 = _a.sent();
                        return [4 /*yield*/, this.entityManager.findOneBy(meeting_room_entity_1.MeetingRoom, {
                                id: 3
                            })];
                    case 3:
                        room1 = _a.sent();
                        return [4 /*yield*/, this.entityManager.findOneBy(meeting_room_entity_1.MeetingRoom, {
                                id: 6
                            })];
                    case 4: return [4 /*yield*/, _a.sent()];
                    case 5:
                        room2 = _a.sent();
                        booking1 = new booking_entity_1.Booking();
                        booking1.room = room1;
                        booking1.user = user1;
                        booking1.startTime = new Date();
                        booking1.endTime = new Date(Date.now() + 1000 * 60 * 60);
                        return [4 /*yield*/, this.entityManager.save(booking_entity_1.Booking, booking1)];
                    case 6:
                        _a.sent();
                        booking2 = new booking_entity_1.Booking();
                        booking2.room = room2;
                        booking2.user = user2;
                        booking2.startTime = new Date();
                        booking2.endTime = new Date(Date.now() + 1000 * 60 * 60);
                        return [4 /*yield*/, this.entityManager.save(booking_entity_1.Booking, booking2)];
                    case 7:
                        _a.sent();
                        booking3 = new booking_entity_1.Booking();
                        booking3.room = room1;
                        booking3.user = user2;
                        booking3.startTime = new Date();
                        booking3.endTime = new Date(Date.now() + 1000 * 60 * 60);
                        return [4 /*yield*/, this.entityManager.save(booking_entity_1.Booking, booking3)];
                    case 8:
                        _a.sent();
                        booking4 = new booking_entity_1.Booking();
                        booking4.room = room2;
                        booking4.user = user1;
                        booking4.startTime = new Date();
                        booking4.endTime = new Date(Date.now() + 1000 * 60 * 60);
                        return [4 /*yield*/, this.entityManager.save(booking_entity_1.Booking, booking4)];
                    case 9:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BookingService.prototype.find = function (pageNo, pageSize, username, meetingRoomName, meetingRoomPosition, bookingTimeRangeStart, bookingTimeRangeEnd) {
        return __awaiter(this, void 0, void 0, function () {
            var skipCount, condition, _a, bookings, totalCount;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        skipCount = (pageNo - 1) * pageSize;
                        condition = {};
                        if (username) {
                            condition.user = {
                                username: typeorm_1.Like("%" + username + "%")
                            };
                        }
                        if (meetingRoomName) {
                            condition.room = {
                                name: typeorm_1.Like("%" + meetingRoomName + "%")
                            };
                        }
                        if (meetingRoomPosition) {
                            if (!condition.room) {
                                condition.room = {};
                            }
                            condition.room.location = typeorm_1.Like("%" + meetingRoomPosition + "%");
                        }
                        if (bookingTimeRangeStart) {
                            if (!bookingTimeRangeEnd) {
                                bookingTimeRangeEnd = bookingTimeRangeStart + 60 * 60 * 1000;
                            }
                            condition.startTime = typeorm_1.Between(new Date(bookingTimeRangeStart), new Date(bookingTimeRangeEnd));
                        }
                        return [4 /*yield*/, this.entityManager.findAndCount(booking_entity_1.Booking, {
                                where: condition,
                                relations: {
                                    user: true,
                                    room: true
                                },
                                skip: skipCount,
                                take: pageSize
                            })];
                    case 1:
                        _a = _b.sent(), bookings = _a[0], totalCount = _a[1];
                        return [2 /*return*/, {
                                bookings: bookings.map(function (item) {
                                    delete item.user.password;
                                    return item;
                                }),
                                totalCount: totalCount
                            }];
                }
            });
        });
    };
    BookingService.prototype.add = function (bookingDto, userId) {
        return __awaiter(this, void 0, void 0, function () {
            var meetingRoom, user, booking, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.entityManager.findOneBy(meeting_room_entity_1.MeetingRoom, {
                            id: bookingDto.meetingRoomId
                        })];
                    case 1:
                        meetingRoom = _a.sent();
                        if (!meetingRoom) {
                            throw new common_1.BadRequestException('会议室不存在');
                        }
                        return [4 /*yield*/, this.entityManager.findOneBy(user_entity_1.User, {
                                id: userId
                            })];
                    case 2:
                        user = _a.sent();
                        booking = new booking_entity_1.Booking();
                        booking.room = meetingRoom;
                        booking.user = user;
                        booking.startTime = new Date(bookingDto.startTime);
                        booking.endTime = new Date(bookingDto.endTime);
                        return [4 /*yield*/, this.entityManager.findOneBy(booking_entity_1.Booking, {
                                room: {
                                    id: meetingRoom.id
                                },
                                startTime: typeorm_1.LessThanOrEqual(booking.startTime),
                                endTime: typeorm_1.MoreThanOrEqual(booking.endTime)
                            })];
                    case 3:
                        res = _a.sent();
                        if (res) {
                            throw new common_1.BadRequestException('该时间段已被预定');
                        }
                        return [4 /*yield*/, this.entityManager.save(booking_entity_1.Booking, booking)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BookingService.prototype.apply = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.entityManager.update(booking_entity_1.Booking, {
                            id: id
                        }, {
                            status: '审批通过'
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, 'success'];
                }
            });
        });
    };
    BookingService.prototype.reject = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.entityManager.update(booking_entity_1.Booking, {
                            id: id
                        }, {
                            status: '审批驳回'
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, 'success'];
                }
            });
        });
    };
    BookingService.prototype.unbind = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.entityManager.update(booking_entity_1.Booking, {
                            id: id
                        }, {
                            status: '已解除'
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, 'success'];
                }
            });
        });
    };
    BookingService.prototype.urge = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var flag, email, admin;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.redisService.get('urge_' + id)];
                    case 1:
                        flag = _a.sent();
                        if (flag) {
                            return [2 /*return*/, '半小时内只能催办一次，请耐心等待'];
                        }
                        return [4 /*yield*/, this.redisService.get('admin_email')];
                    case 2:
                        email = _a.sent();
                        if (!!email) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.entityManager.findOne(user_entity_1.User, {
                                select: {
                                    email: true
                                },
                                where: {
                                    isAdmin: true
                                }
                            })];
                    case 3:
                        admin = _a.sent();
                        email = admin.email;
                        this.redisService.set('admin_email', admin.email);
                        _a.label = 4;
                    case 4:
                        this.emailService.sendMail({
                            to: email,
                            subject: '预定申请催办提醒',
                            html: "id \u4E3A " + id + " \u7684\u9884\u5B9A\u7533\u8BF7\u6B63\u5728\u7B49\u5F85\u5BA1\u6279"
                        });
                        this.redisService.set('urge_' + id, 1, 60 * 30);
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        typeorm_2.InjectEntityManager()
    ], BookingService.prototype, "entityManager");
    __decorate([
        common_1.Inject(redis_service_1.RedisService)
    ], BookingService.prototype, "redisService");
    __decorate([
        common_1.Inject(email_service_1.EmailService)
    ], BookingService.prototype, "emailService");
    BookingService = __decorate([
        common_1.Injectable()
    ], BookingService);
    return BookingService;
}());
exports.BookingService = BookingService;
