"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginGuard = void 0;
var common_1 = require("@nestjs/common");
var jwt_1 = require("@nestjs/jwt");
var LoginGuard = /** @class */ (function () {
    function LoginGuard() {
    }
    LoginGuard.prototype.canActivate = function (context) {
        var request = context.switchToHttp().getRequest();
        var requireLogin = this.reflector.getAllAndOverride('require-login', [
            context.getClass(),
            context.getHandler(),
        ]);
        if (!requireLogin) {
            return true;
        }
        var authorization = request.headers.authorization;
        if (!authorization) {
            throw new common_1.UnauthorizedException('用户未登录');
        }
        try {
            var token = authorization.split(' ')[1];
            var data = this.jwtService.verify(token);
            request.user = {
                userId: data.userId,
                username: data.username,
                roles: data.roles,
                permissions: data.permissions
            };
            return true;
        }
        catch (e) {
            throw new common_1.UnauthorizedException('token 失效，请重新登录');
        }
    };
    __decorate([
        common_1.Inject()
    ], LoginGuard.prototype, "reflector");
    __decorate([
        common_1.Inject(jwt_1.JwtService)
    ], LoginGuard.prototype, "jwtService");
    LoginGuard = __decorate([
        common_1.Injectable()
    ], LoginGuard);
    return LoginGuard;
}());
exports.LoginGuard = LoginGuard;
