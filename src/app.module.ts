import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { ConfigModule } from '@nestjs/config';
import { DBModule } from './db/db.module';
// import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CatModule,
    DBModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
