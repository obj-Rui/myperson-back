"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
exports.UserController = void 0;
var common_1 = require("@nestjs/common");
var register_user_dto_1 = require("./dto/register-user.dto");
var login_user_dto_1 = require("./dto/login-user.dto");
var config_1 = require("@nestjs/config");
var jwt_1 = require("@nestjs/jwt");
var custom_decorator_1 = require("src/custom.decorator");
var user_info_vo_1 = require("./vo/user-info.vo");
var update_user_password_dto_1 = require("./dto/update-user-password.dto");
var udpate_user_dto_1 = require("./dto/udpate-user.dto");
var utils_1 = require("src/utils");
var swagger_1 = require("@nestjs/swagger");
var login_user_vo_1 = require("./vo/login-user.vo");
var refresh_token_vo_1 = require("./vo/refresh-token.vo");
var UserController = /** @class */ (function () {
    function UserController(userService) {
        this.userService = userService;
    }
    UserController.prototype.register = function (registerUser) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.register(registerUser)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserController.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.initData()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, 'done'];
                }
            });
        });
    };
    UserController.prototype.userLogin = function (loginUser) {
        return __awaiter(this, void 0, void 0, function () {
            var vo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.login(loginUser, false)];
                    case 1:
                        vo = _a.sent();
                        vo.accessToken = this.jwtService.sign({
                            userId: vo.userInfo.id,
                            username: vo.userInfo.username,
                            roles: vo.userInfo.roles,
                            permissions: vo.userInfo.permissions
                        }, {
                            expiresIn: this.configService.get('jwt_access_token_expires_time') || '30m'
                        });
                        vo.refreshToken = this.jwtService.sign({
                            userId: vo.userInfo.id
                        }, {
                            expiresIn: this.configService.get('jwt_refresh_token_expres_time') || '7d'
                        });
                        return [2 /*return*/, vo];
                }
            });
        });
    };
    UserController.prototype.adminLogin = function (loginUser) {
        return __awaiter(this, void 0, void 0, function () {
            var vo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.login(loginUser, true)];
                    case 1:
                        vo = _a.sent();
                        vo.accessToken = this.jwtService.sign({
                            userId: vo.userInfo.id,
                            username: vo.userInfo.username,
                            roles: vo.userInfo.roles,
                            permissions: vo.userInfo.permissions
                        }, {
                            expiresIn: this.configService.get('jwt_access_token_expires_time') || '30m'
                        });
                        vo.refreshToken = this.jwtService.sign({
                            userId: vo.userInfo.id
                        }, {
                            expiresIn: this.configService.get('jwt_refresh_token_expres_time') || '7d'
                        });
                        return [2 /*return*/, vo];
                }
            });
        });
    };
    UserController.prototype.refresh = function (refreshToken) {
        return __awaiter(this, void 0, void 0, function () {
            var data, user, access_token, refresh_token, vo, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        data = this.jwtService.verify(refreshToken);
                        return [4 /*yield*/, this.userService.findUserById(data.userId, false)];
                    case 1:
                        user = _a.sent();
                        access_token = this.jwtService.sign({
                            userId: user.id,
                            username: user.username,
                            roles: user.roles,
                            permissions: user.permissions
                        }, {
                            expiresIn: this.configService.get('jwt_access_token_expires_time') || '30m'
                        });
                        refresh_token = this.jwtService.sign({
                            userId: user.id
                        }, {
                            expiresIn: this.configService.get('jwt_refresh_token_expres_time') || '7d'
                        });
                        vo = new refresh_token_vo_1.RefreshTokenVo();
                        vo.access_token = access_token;
                        vo.refresh_token = refresh_token;
                        return [2 /*return*/, vo];
                    case 2:
                        e_1 = _a.sent();
                        throw new common_1.UnauthorizedException('token 已失效，请重新登录');
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.adminRefresh = function (refreshToken) {
        return __awaiter(this, void 0, void 0, function () {
            var data, user, access_token, refresh_token, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        data = this.jwtService.verify(refreshToken);
                        return [4 /*yield*/, this.userService.findUserById(data.userId, true)];
                    case 1:
                        user = _a.sent();
                        access_token = this.jwtService.sign({
                            userId: user.id,
                            username: user.username,
                            roles: user.roles,
                            permissions: user.permissions
                        }, {
                            expiresIn: this.configService.get('jwt_access_token_expires_time') || '30m'
                        });
                        refresh_token = this.jwtService.sign({
                            userId: user.id
                        }, {
                            expiresIn: this.configService.get('jwt_refresh_token_expres_time') || '7d'
                        });
                        return [2 /*return*/, {
                                access_token: access_token,
                                refresh_token: refresh_token
                            }];
                    case 2:
                        e_2 = _a.sent();
                        throw new common_1.UnauthorizedException('token 已失效，请重新登录');
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.info = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var user, vo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.findUserDetailById(userId)];
                    case 1:
                        user = _a.sent();
                        vo = new user_info_vo_1.UserDetailVo();
                        vo.id = user.id;
                        vo.email = user.email;
                        vo.username = user.username;
                        vo.headPic = user.headPic;
                        vo.phoneNumber = user.phoneNumber;
                        vo.nickName = user.nickName;
                        vo.createTime = user.createTime;
                        vo.isFrozen = user.isFrozen;
                        return [2 /*return*/, vo];
                }
            });
        });
    };
    UserController.prototype.updatePassword = function (userId, passwordDto) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.updatePassword(userId, passwordDto)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserController.prototype.update = function (userId, updateUserDto) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.update(userId, updateUserDto)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserController.prototype.freeze = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.freezeUserById(userId)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, 'success'];
                }
            });
        });
    };
    UserController.prototype.list = function (pageNo, pageSize, username, nickName, email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.findUsers(username, nickName, email, pageNo, pageSize)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    __decorate([
        swagger_1.ApiBody({ type: register_user_dto_1.RegisterUserDto }),
        swagger_1.ApiResponse({
            status: common_1.HttpStatus.BAD_REQUEST,
            description: '验证码已失效/验证码不正确/用户已存在',
            type: String
        }),
        swagger_1.ApiResponse({
            status: common_1.HttpStatus.OK,
            description: '注册成功/失败',
            type: String
        }),
        common_1.Post('register'),
        __param(0, common_1.Body())
    ], UserController.prototype, "register");
    __decorate([
        common_1.Get('init-data')
    ], UserController.prototype, "init");
    __decorate([
        common_1.Inject(jwt_1.JwtService)
    ], UserController.prototype, "jwtService");
    __decorate([
        common_1.Inject(config_1.ConfigService)
    ], UserController.prototype, "configService");
    __decorate([
        swagger_1.ApiBody({
            type: login_user_dto_1.LoginUserDto
        }),
        swagger_1.ApiResponse({
            status: common_1.HttpStatus.BAD_REQUEST,
            description: '用户不存在/密码错误',
            type: String
        }),
        swagger_1.ApiResponse({
            status: common_1.HttpStatus.OK,
            description: '用户信息和 token',
            type: login_user_vo_1.LoginUserVo
        }),
        common_1.Post('login'),
        __param(0, common_1.Body())
    ], UserController.prototype, "userLogin");
    __decorate([
        common_1.Post('admin/login'),
        __param(0, common_1.Body())
    ], UserController.prototype, "adminLogin");
    __decorate([
        swagger_1.ApiQuery({
            name: 'refreshToken',
            type: String,
            description: '刷新 token',
            required: true,
            example: 'xxxxxxxxyyyyyyyyzzzzz'
        }),
        swagger_1.ApiResponse({
            status: common_1.HttpStatus.UNAUTHORIZED,
            description: 'token 已失效，请重新登录'
        }),
        swagger_1.ApiResponse({
            status: common_1.HttpStatus.OK,
            description: '刷新成功'
        }),
        common_1.Get('refresh'),
        __param(0, common_1.Query('refreshToken'))
    ], UserController.prototype, "refresh");
    __decorate([
        common_1.Get('admin/refresh'),
        __param(0, common_1.Query('refreshToken'))
    ], UserController.prototype, "adminRefresh");
    __decorate([
        swagger_1.ApiBearerAuth(),
        swagger_1.ApiResponse({
            status: common_1.HttpStatus.OK,
            description: '获取用户信息',
            type: user_info_vo_1.UserDetailVo
        }),
        common_1.Get('info'),
        custom_decorator_1.RequireLogin(),
        __param(0, custom_decorator_1.UserInfo('userId'))
    ], UserController.prototype, "info");
    __decorate([
        swagger_1.ApiBearerAuth(),
        swagger_1.ApiBody({
            type: update_user_password_dto_1.UpdateUserPasswordDto
        }),
        swagger_1.ApiResponse({
            type: String,
            description: '验证码已失效/不正确'
        }),
        common_1.Post(['update_password', 'admin/update_password']),
        custom_decorator_1.RequireLogin(),
        __param(0, custom_decorator_1.UserInfo('userId')),
        __param(1, common_1.Body())
    ], UserController.prototype, "updatePassword");
    __decorate([
        swagger_1.ApiBearerAuth(),
        swagger_1.ApiBody({
            type: udpate_user_dto_1.UpdateUserDto
        }),
        swagger_1.ApiResponse({
            status: common_1.HttpStatus.BAD_REQUEST,
            description: '验证码已失效/不正确'
        }),
        swagger_1.ApiResponse({
            status: common_1.HttpStatus.OK,
            description: '更新成功',
            type: String
        }),
        common_1.Post(['update', 'admin/update']),
        custom_decorator_1.RequireLogin(),
        __param(0, custom_decorator_1.UserInfo('userId')),
        __param(1, common_1.Body())
    ], UserController.prototype, "update");
    __decorate([
        swagger_1.ApiBearerAuth(),
        swagger_1.ApiQuery({
            name: 'id',
            description: 'userId',
            type: Number
        }),
        swagger_1.ApiResponse({
            type: String,
            description: 'success'
        }),
        custom_decorator_1.RequireLogin(),
        common_1.Get('freeze'),
        __param(0, common_1.Query('id'))
    ], UserController.prototype, "freeze");
    __decorate([
        swagger_1.ApiBearerAuth(),
        swagger_1.ApiQuery({
            name: 'pageNo',
            description: '第几页',
            type: Number
        }),
        swagger_1.ApiQuery({
            name: 'pageSize',
            description: '每页多少条',
            type: Number
        }),
        swagger_1.ApiQuery({
            name: 'username',
            description: '用户名',
            type: Number
        }),
        swagger_1.ApiQuery({
            name: 'nickName',
            description: '昵称',
            type: Number
        }),
        swagger_1.ApiQuery({
            name: 'email',
            description: '邮箱地址',
            type: Number
        }),
        swagger_1.ApiResponse({
            type: String,
            description: '用户列表'
        }),
        custom_decorator_1.RequireLogin(),
        common_1.Get('list'),
        __param(0, common_1.Query('pageNo', new common_1.DefaultValuePipe(1), utils_1.generateParseIntPipe('pageNo'))),
        __param(1, common_1.Query('pageSize', new common_1.DefaultValuePipe(2), utils_1.generateParseIntPipe('pageSize'))),
        __param(2, common_1.Query('username')),
        __param(3, common_1.Query('nickName')),
        __param(4, common_1.Query('email'))
    ], UserController.prototype, "list");
    UserController = __decorate([
        swagger_1.ApiTags('用户模块'),
        common_1.Controller('user')
    ], UserController);
    return UserController;
}());
exports.UserController = UserController;
