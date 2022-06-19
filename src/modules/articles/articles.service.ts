import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import {ArticleDto, GetArticlesListQueryDto} from './articles.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './articles.entity';
import { PaginationQueryDto } from '../../dto/in';
import { getPagination, paginationParams } from '../../libs/pagination';

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

    async getArticles(queryParams: GetArticlesListQueryDto, pagination: PaginationQueryDto) {
        try {
            const query : Record<string, unknown> = {}
            if (queryParams.type) query.type = queryParams.type;

            const { skip, limit } = paginationParams(pagination.page, pagination.limit);

            const [articles, count] = await this.articleRepository.findAndCount({
                where: query,
                take: limit,
                skip,
            });

            return { data: { articles }, meta: getPagination(pagination, count) }
        } catch(e) {
            throw new BadRequestException(e.message)
        }
    }
}
