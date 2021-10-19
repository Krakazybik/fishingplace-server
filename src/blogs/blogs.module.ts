import { Module } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { BlogsController } from './blogs.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Blog } from './blogs.model';
import { UserModule } from '../user/user.module';

@Module({
  providers: [BlogsService],
  controllers: [BlogsController],
  imports: [SequelizeModule.forFeature([Blog]), UserModule],
  exports: [BlogsService],
})
export class BlogsModule {}
