import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TrophiesModule } from './trophies/trophies.module';
import { User } from './user/user.model';
import { GearModule } from './gear/gear.module';
import { Trophy } from './trophies/trophies.model';
import { Gear } from './gear/gear.model';

@Module({
  imports: [
    UserModule,
    TrophiesModule,
    ConfigModule.forRoot({ envFilePath: `.${process.env.NODE_ENV}.env` }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      models: [User, Trophy, Gear],
      autoLoadModels: true,
    }),
    GearModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
