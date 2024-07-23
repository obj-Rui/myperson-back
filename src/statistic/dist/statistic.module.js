"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StatisticModule = void 0;
var common_1 = require("@nestjs/common");
var statistic_service_1 = require("./statistic.service");
var statistic_controller_1 = require("./statistic.controller");
var StatisticModule = /** @class */ (function () {
    function StatisticModule() {
    }
    StatisticModule = __decorate([
        common_1.Module({
            providers: [statistic_service_1.StatisticService],
            controllers: [statistic_controller_1.StatisticController]
        })
    ], StatisticModule);
    return StatisticModule;
}());
exports.StatisticModule = StatisticModule;
