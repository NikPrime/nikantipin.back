import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, UseGuards} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ApiResponse } from '@nestjs/swagger';
import { ArticleDto } from './articles.dto';
import { JwtGuard } from '../../auth/jwt-guard';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: 200,
  })
  async getArticleById(@Param('id') articleId: string) {
    return this.articlesService.getArticleById(articleId);
  }

  @UseGuards(JwtGuard)
  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: 201,
  })
  async saveArticle(@Body() article: ArticleDto) {
    return this.articlesService.saveArticle(article);
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: 200,
  })
  async updateArticleById(@Param('id') articleId: string) {
    return this.articlesService.updateArticleById(articleId);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: 200,
  })
  async deleteArticleById(@Param('id') articleId: string) {
    return this.articlesService.deleteArticleById(articleId);
  }
}
