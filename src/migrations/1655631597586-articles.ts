import { MigrationInterface, QueryRunner } from 'typeorm'

export class articles1655631597586 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE articles (
            id SERIAL primary key,
            header TEXT,
            article TEXT,
            type VARCHAR(255)
            );`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE articles');
    }

}
