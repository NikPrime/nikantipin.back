import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { ArticleDto } from './articles.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './articles.entity';

@Injectable()
export class ArticlesService {
    constructor(
        @InjectRepository(Article)
        private articleRepository: Repository<Article>,
    ) {
    }
    async saveArticle(article: ArticleDto) {
        try {
            await this.articleRepository.insert(article);
            return { success: true };
        } catch(e) {
            throw new BadRequestException(e.message)
        }
    }

    async getArticleById(articleId: string) {
        try {
            const article = await this.articleRepository.findOne({ where: { id: articleId } });
            if (!article) throw new NotFoundException('Article doesn\'t exists');

            return { data: { article }, meta: {} };
        } catch(e) {
            throw new BadRequestException(e.message)
        }
    }

    async updateArticleById(articleId: string) {
        try {
            const article = await this.articleRepository.findOne({ where: { id: articleId } });
            if (!article) throw new NotFoundException('Article not found');

           await this.articleRepository.save({ id: articleId });

            return { success: true };
        } catch(e) {
            throw new BadRequestException(e.message)
        }
    }

    async deleteArticleById(articleId: string) {
        try {
            const article = await this.articleRepository.findOne({ where: { id: articleId } });
            if (!article) throw new NotFoundException('Article doesn\'t exists');

            await this.articleRepository.delete({ id: articleId });
        } catch(e) {
            throw new BadRequestException(e.message)
        }
    }
}
