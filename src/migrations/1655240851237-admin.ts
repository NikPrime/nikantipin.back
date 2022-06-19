import { MigrationInterface, QueryRunner } from 'typeorm'

export class admin1655240851237 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE admins (
            id SERIAL primary key,
            email VARCHAR(255) unique not null,
            password TEXT not null
            );`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE admins');
    }
}
