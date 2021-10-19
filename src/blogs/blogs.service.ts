import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Blog } from './blogs.model';
import { AddBlogDto } from './dto/add-blog.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class BlogsService {
  constructor(
    @InjectModel(Blog) private blogsRepository: typeof Blog,
    private userRepository: UserService,
  ) {}

  async addBlog(dto: AddBlogDto) {
    return await this.blogsRepository.create(dto);
  }

  async getBlogs(offset: number) {
    const { rows, count } = await this.blogsRepository.findAndCountAll({
      offset,
      limit: 20,
    });

    /* TODO: Trim without trimming words chars */
    /* TODO: Offset, count */
    return rows.map((item) => {
      return {
        id: item.id,
        title: item.title,
        author: item.author,
        userId: item.userId,
        createdAt: item.createdAt,
        content: item.content.slice(0, 200),
      };
    });
  }
}
