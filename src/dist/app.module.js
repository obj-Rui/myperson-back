"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var user_module_1 = require("./user/user.module");
var permission_entity_1 = require("./user/entities/permission.entity");
var role_entity_1 = require("./user/entities/role.entity");
var user_entity_1 = require("./user/entities/user.entity");
var redis_module_1 = require("./redis/redis.module");
var email_module_1 = require("./email/email.module");
var config_1 = require("@nestjs/config");
var jwt_1 = require("@nestjs/jwt");
var core_1 = require("@nestjs/core");
var login_guard_1 = require("./login.guard");
var permission_guard_1 = require("./permission.guard");
var meeting_room_module_1 = require("./meeting-room/meeting-room.module");
var meeting_room_entity_1 = require("./meeting-room/entities/meeting-room.entity");
var booking_module_1 = require("./booking/booking.module");
var booking_entity_1 = require("./booking/entities/booking.entity");
var statistic_module_1 = require("./statistic/statistic.module");
var path = require("path");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        common_1.Module({
            imports: [
                jwt_1.JwtModule.registerAsync({
                    global: true,
                    useFactory: function (configService) {
                        return {
                            secret: configService.get('jwt_secret'),
                            signOptions: {
                                expiresIn: '30m'
                            }
                        };
                    },
                    inject: [config_1.ConfigService]
                }),
                config_1.ConfigModule.forRoot({
                    isGlobal: true,
                    // envFilePath: 'src/.env',
                    envFilePath: path.join(__dirname, '.env')
                }),
                typeorm_1.TypeOrmModule.forRootAsync({
                    useFactory: function (configService) {
                        return {
                            type: 'mysql',
                            host: configService.get('mysql_server_host'),
                            port: configService.get('mysql_server_port'),
                            username: configService.get('mysql_server_username'),
                            password: configService.get('mysql_server_password'),
                            database: configService.get('mysql_server_database'),
                            synchronize: true,
                            logging: true,
                            entities: [user_entity_1.User, role_entity_1.Role, permission_entity_1.Permission, meeting_room_entity_1.MeetingRoom, booking_entity_1.Booking],
                            poolSize: 10,
                            connectorPackage: 'mysql2',
                            extra: {
                                authPlugin: 'sha256_password'
                            }
                        };
                    },
                    inject: [config_1.ConfigService]
                }),
                user_module_1.UserModule,
                redis_module_1.RedisModule,
                email_module_1.EmailModule,
                meeting_room_module_1.MeetingRoomModule,
                booking_module_1.BookingModule,
                statistic_module_1.StatisticModule,
            ],
            controllers: [app_controller_1.AppController],
            providers: [
                app_service_1.AppService,
                {
                    provide: core_1.APP_GUARD,
                    useClass: login_guard_1.LoginGuard
                },
                {
                    provide: core_1.APP_GUARD,
                    useClass: permission_guard_1.PermissionGuard
                },
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
