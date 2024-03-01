import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CatService } from './cat/cat.service';
import { Cat } from './cat/cat.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly catService: CatService,
  ) {}

  @Get()
  getHello(): Promise<Cat[]> {
    return this.catService.findAll();
  }

  @Get('/about')
  getAbout(): string {
    return this.appService.getHello();
  }
}
