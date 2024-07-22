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
exports.UserService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var utils_1 = require("src/utils");
var user_entity_1 = require("./entities/user.entity");
var redis_service_1 = require("src/redis/redis.service");
var role_entity_1 = require("./entities/role.entity");
var permission_entity_1 = require("./entities/permission.entity");
var login_user_vo_1 = require("./vo/login-user.vo");
var UserService = /** @class */ (function () {
    function UserService() {
        this.logger = new common_1.Logger();
    }
    UserService_1 = UserService;
    UserService.prototype.register = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var captcha, foundUser, newUser, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.redisService.get("captcha_" + user.email)];
                    case 1:
                        captcha = _a.sent();
                        console.log('[ captcha ]-27', captcha);
                        if (!captcha) {
                            throw new common_1.HttpException('验证码已失效', common_1.HttpStatus.BAD_REQUEST);
                        }
                        if (user.captcha !== captcha) {
                            throw new common_1.HttpException('验证码不正确', common_1.HttpStatus.BAD_REQUEST);
                        }
                        return [4 /*yield*/, this.userRepository.findOneBy({
                                username: user.username
                            })];
                    case 2:
                        foundUser = _a.sent();
                        if (foundUser) {
                            throw new common_1.HttpException('用户已存在', common_1.HttpStatus.BAD_REQUEST);
                        }
                        newUser = new user_entity_1.User();
                        newUser.username = user.username;
                        newUser.password = utils_1.md5(user.password);
                        newUser.email = user.email;
                        newUser.nickName = user.nickName;
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.userRepository.save(newUser)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, '注册成功'];
                    case 5:
                        e_1 = _a.sent();
                        this.logger.error(e_1, UserService_1);
                        return [2 /*return*/, '注册失败'];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.initData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user1, user2, role1, role2, permission1, permission2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user1 = new user_entity_1.User();
                        user1.username = 'admin'; // 用户名
                        user1.password = utils_1.md5('123456'); // 密码
                        user1.email = 'admin@163.com'; // 邮箱
                        user1.isAdmin = true;
                        user1.nickName = '管理员'; // 昵称
                        user1.phoneNumber = '123123123123123';
                        user2 = new user_entity_1.User();
                        user2.username = 'user'; // 用户名
                        user2.password = utils_1.md5('123456'); // 密码
                        user2.email = 'user@163.com'; // 邮箱
                        user2.nickName = '用户'; // 昵称
                        user2.phoneNumber = '123123123123123';
                        role1 = new role_entity_1.Role();
                        role1.name = '管理员'; // 角色名
                        role2 = new role_entity_1.Role();
                        role2.name = '普通用户'; // 角色名
                        permission1 = new permission_entity_1.Permission();
                        permission1.code = 'ccc';
                        permission1.description = 'ccc权限';
                        permission2 = new permission_entity_1.Permission();
                        permission2.code = 'ddd';
                        permission2.description = 'ddd权限';
                        user1.roles = [role1];
                        user2.roles = [role2];
                        role1.permissions = [permission1, permission2];
                        role2.permissions = [permission1];
                        return [4 /*yield*/, this.permissionRepository.save([permission1, permission2])];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.roleRepository.save([role1, role2])];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.userRepository.save([user1, user2])];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.login = function (loginUserDto, isAdmin) {
        return __awaiter(this, void 0, void 0, function () {
            var user, vo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOne({
                            where: {
                                username: loginUserDto.username,
                                isAdmin: isAdmin
                            },
                            relations: ['roles', 'roles.permissions']
                        })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new common_1.HttpException('用户不存在', common_1.HttpStatus.BAD_REQUEST);
                        }
                        if (user.password !== utils_1.md5(loginUserDto.password)) {
                            throw new common_1.HttpException('密码错误', common_1.HttpStatus.BAD_REQUEST);
                        }
                        vo = new login_user_vo_1.LoginUserVo();
                        vo.userInfo = {
                            id: user.id,
                            username: user.username,
                            nickName: user.nickName,
                            email: user.email,
                            phoneNumber: user.phoneNumber,
                            headPic: user.headPic,
                            createTime: user.createTime.getTime(),
                            isFrozen: user.isFrozen,
                            isAdmin: user.isAdmin,
                            roles: user.roles.map(function (item) { return item.name; }),
                            permissions: user.roles.reduce(function (arr, item) {
                                item.permissions.forEach(function (permission) {
                                    if (arr.indexOf(permission) === -1) {
                                        arr.push(permission);
                                    }
                                });
                                return arr;
                            }, [])
                        };
                        return [2 /*return*/, vo];
                }
            });
        });
    };
    UserService.prototype.findUserById = function (userId, isAdmin) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOne({
                            where: {
                                id: userId,
                                isAdmin: isAdmin
                            },
                            relations: ['roles', 'roles.permissions']
                        })];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, {
                                id: user.id,
                                username: user.username,
                                isAdmin: user.isAdmin,
                                roles: user.roles.map(function (item) { return item.name; }),
                                permissions: user.roles.reduce(function (arr, item) {
                                    item.permissions.forEach(function (permission) {
                                        if (arr.indexOf(permission) === -1) {
                                            arr.push(permission);
                                        }
                                    });
                                    return arr;
                                }, [])
                            }];
                }
            });
        });
    };
    UserService.prototype.findUserDetailById = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOne({
                            where: {
                                id: userId
                            }
                        })];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, user];
                }
            });
        });
    };
    UserService.prototype.updatePassword = function (userId, passwordDto) {
        return __awaiter(this, void 0, void 0, function () {
            var captcha, foundUser, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.redisService.get("update_password_captcha_" + passwordDto.email)];
                    case 1:
                        captcha = _a.sent();
                        if (!captcha) {
                            throw new common_1.HttpException('验证码已失效', common_1.HttpStatus.BAD_REQUEST);
                        }
                        if (passwordDto.captcha !== captcha) {
                            throw new common_1.HttpException('验证码不正确', common_1.HttpStatus.BAD_REQUEST);
                        }
                        return [4 /*yield*/, this.userRepository.findOneBy({
                                id: userId
                            })];
                    case 2:
                        foundUser = _a.sent();
                        foundUser.password = utils_1.md5(passwordDto.password);
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.userRepository.save(foundUser)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, '密码修改成功'];
                    case 5:
                        e_2 = _a.sent();
                        this.logger.error(e_2, UserService_1);
                        return [2 /*return*/, '密码修改失败'];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.update = function (userId, updateUserDto) {
        return __awaiter(this, void 0, void 0, function () {
            var captcha, foundUser, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.redisService.get("update_user_captcha_" + updateUserDto.email)];
                    case 1:
                        captcha = _a.sent();
                        if (!captcha) {
                            throw new common_1.HttpException('验证码已失效', common_1.HttpStatus.BAD_REQUEST);
                        }
                        if (updateUserDto.captcha !== captcha) {
                            throw new common_1.HttpException('验证码不正确', common_1.HttpStatus.BAD_REQUEST);
                        }
                        return [4 /*yield*/, this.userRepository.findOneBy({
                                id: userId
                            })];
                    case 2:
                        foundUser = _a.sent();
                        if (updateUserDto.nickName) {
                            foundUser.nickName = updateUserDto.nickName;
                        }
                        if (updateUserDto.headPic) {
                            foundUser.headPic = updateUserDto.headPic;
                        }
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.userRepository.save(foundUser)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, '用户信息修改成功'];
                    case 5:
                        e_3 = _a.sent();
                        this.logger.error(e_3, UserService_1);
                        return [2 /*return*/, '用户信息修改成功'];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    var UserService_1;
    __decorate([
        typeorm_1.InjectRepository(user_entity_1.User)
    ], UserService.prototype, "userRepository");
    __decorate([
        typeorm_1.InjectRepository(role_entity_1.Role)
    ], UserService.prototype, "roleRepository");
    __decorate([
        typeorm_1.InjectRepository(permission_entity_1.Permission)
    ], UserService.prototype, "permissionRepository");
    __decorate([
        common_1.Inject(redis_service_1.RedisService)
    ], UserService.prototype, "redisService");
    UserService = UserService_1 = __decorate([
        common_1.Injectable()
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
