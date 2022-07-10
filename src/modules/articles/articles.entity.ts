import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

    @Column({ name: 'image_url' })
    imageUrl: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @Column({ name: 'short_id' })
    shortId: string;
}
