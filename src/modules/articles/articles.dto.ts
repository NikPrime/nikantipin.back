import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
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