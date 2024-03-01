import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from '../cat/cat.entity';

const MyTypeOrmModule = TypeOrmModule.forRootAsync({
  imports: [ConfigModule.forRoot()],
  useFactory: (configService: ConfigService) => ({
    type: 'mysql',
    host: configService.get<string>('DB_HOST'),
    port: configService.get('DB_PORT'),
    username: configService.get('DB_USER'),
    password: configService.get('DB_PWD'),
    database: configService.get('DB_NAME'),
    entities: [Cat],
    synchronize: true,
  }),
  inject: [ConfigService],
});

@Global()
@Module({
  imports: [MyTypeOrmModule],
  exports: [MyTypeOrmModule],
})
export class DBModule {}
