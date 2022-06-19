import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export type ArticleType = 'blog' | 'tech' | 'algo';

@Entity({ name: 'articles' })
export class Article {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    header: string;

    @Column()
    article: string;

    @Column()
    type: ArticleType;
}
