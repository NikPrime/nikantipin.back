import { MigrationInterface, QueryRunner } from "typeorm"

export class articleShortid1657466623032 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE articles
            ADD COLUMN short_id VARCHAR(255)
        `);
        await queryRunner.query(`
            ALTER TABLE articles
            ADD CONSTRAINT short_id UNIQUE (short_id)
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE articles
            DROP COLUMN short_id
        `);
    }

}
