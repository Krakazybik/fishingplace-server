import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { AddBlogDto } from './dto/add-blog.dto';

@Controller('blogs')
export class BlogsController {
  constructor(private blogsService: BlogsService) {}

  @Post()
  addBlog(@Body() body: AddBlogDto) {
    return this.blogsService.addBlog(body);
  }

  @Get('/')
  getFirstBlogs() {
    return this.blogsService.getBlogs(0);
  }

  @Get('/:offset')
  getBlogs(@Param('offset') offset = 0) {
    return this.blogsService.getBlogs(offset);
  }
}
