import { Controller, Get, SetMetadata } from '@nestjs/common';
import { AppService } from './app.service';
import { RequireLogin } from './custom.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('aa')
  @RequireLogin()
  aaa(): string {
    return this.appService.getHello();
  }
  @Get('bb')
  @SetMetadata('require-login', true)
  bbb(): string {
    return this.appService.getHello();
  }
}
