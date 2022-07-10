import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
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

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    imageUrl: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsDate()
    createdAt: string;

    @ApiProperty()
    @IsString()
    shortId: string;
}

export class GetArticlesListQueryDto {
    @ApiProperty({ description: '', required: false })
    @IsOptional()
    type?: string;
}