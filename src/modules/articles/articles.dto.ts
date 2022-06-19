import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ArticleType } from './articles.entity';

export class ArticleDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    header: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    article: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    type: ArticleType;
}

export class GetArticlesListQueryDto {
    @ApiProperty({ description: '', required: false })
    @IsOptional()
    type?: string;
}