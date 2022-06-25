import { MigrationInterface, QueryRunner } from "typeorm"

export class articlePhotoAndDate1656162266637 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE articles
            ADD COLUMN image_url VARCHAR,
            ADD COLUMN created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE articles
            DROP COLUMN image_url,
            DROP COLUMN created_at
        `);
    }

}
