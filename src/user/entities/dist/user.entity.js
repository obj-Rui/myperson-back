'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
exports.__esModule = true;
exports.User = void 0;
var typeorm_1 = require('typeorm');
var role_entity_1 = require('./role.entity');
var User = /** @class */ (function () {
  function User() {}
  __decorate([typeorm_1.PrimaryGeneratedColumn()], User.prototype, 'id');
  __decorate(
    [
      typeorm_1.Column({
        length: 50,
        comment: '用户名',
      }),
    ],
    User.prototype,
    'username',
  );
  __decorate(
    [
      typeorm_1.Column({
        length: 50,
        comment: '密码',
      }),
    ],
    User.prototype,
    'password',
  );
  __decorate(
    [
      typeorm_1.Column({
        name: 'nick_name',
        length: 50,
        comment: '昵称',
      }),
    ],
    User.prototype,
    'nickName',
  );
  __decorate(
    [
      typeorm_1.Column({
        comment: '邮箱',
        length: 50,
      }),
    ],
    User.prototype,
    'email',
  );
  __decorate(
    [
      typeorm_1.Column({
        comment: '头像',
        length: 100,
        nullable: true,
      }),
    ],
    User.prototype,
    'headPic',
  );
  __decorate(
    [
      typeorm_1.Column({
        comment: '手机号',
        length: 20,
        nullable: true,
      }),
    ],
    User.prototype,
    'phoneNumber',
  );
  __decorate(
    [
      typeorm_1.Column({
        comment: '是否冻结',
        default: false,
      }),
    ],
    User.prototype,
    'isFrozen',
  );
  __decorate(
    [
      typeorm_1.Column({
        comment: '是否是管理员',
        default: false,
      }),
    ],
    User.prototype,
    'isAdmin',
  );
  __decorate([typeorm_1.CreateDateColumn()], User.prototype, 'createTime');
  __decorate([typeorm_1.UpdateDateColumn()], User.prototype, 'updateTime');
  __decorate(
    [
      typeorm_1.ManyToMany(function () {
        return role_entity_1.Role;
      }),
      typeorm_1.JoinTable({
        name: 'user_roles',
      }),
    ],
    User.prototype,
    'roles',
  );
  User = __decorate(
    [
      typeorm_1.Entity({
        name: 'users',
      }),
    ],
    User,
  );
  return User;
})();
exports.User = User;
