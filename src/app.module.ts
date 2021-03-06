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
import { WeatherModule } from './weather/weather.module';
import { PlacesModule } from './places/places.module';
import { UserPlace } from './user/user-places.model';
import { Place } from './places/place.model';
import { BlogsModule } from './blogs/blogs.module';
import { Blog } from './blogs/blogs.model';
import { AchievementsModule } from './achievements/achievements.module';

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
      models: [User, Trophy, Gear, Place, UserPlace, Blog],
      autoLoadModels: true,
    }),
    GearModule,
    WeatherModule,
    PlacesModule,
    BlogsModule,
    AchievementsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
