import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ApiResponse } from "@nestjs/swagger";
import { ArticleDto } from "./articles.dto";

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

  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: 201,
  })
  async saveArticle(@Body() article: ArticleDto) {
    return this.articlesService.saveArticle(article);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: 200,
  })
  async updateArticleById(@Param('id') articleId: string) {
    return this.articlesService.updateArticleById(articleId);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: 200,
  })
  async deleteArticleById(@Param('id') articleId: string) {
    return this.articlesService.deleteArticleById(articleId);
  }
}
