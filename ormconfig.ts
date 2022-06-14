import { DataSource } from 'typeorm';
import { join } from 'path';

const {POSTGRES_HOST, POSTGRES_PORT, POSTGRES_DB, POSTGRES_USERNAME, POSTGRES_PASSWORD} = process.env;

export const connectionSource = new DataSource({
        type: 'postgres',
        host: POSTGRES_HOST || 'localhost',
        port: parseInt(POSTGRES_PORT) || 5432,
        username: POSTGRES_USERNAME || 'postgres',
        password: POSTGRES_PASSWORD || 'password',
        database: POSTGRES_DB || 'nikantipin',
        migrations: ['src/migrations/*.ts'],
        entities: [join(__dirname, 'src', 'modules', '**', '*.entity{.ts,.js}'), join(__dirname, 'dist', 'modules', '**', '*.entity{.ts,.js}')],
    },
)