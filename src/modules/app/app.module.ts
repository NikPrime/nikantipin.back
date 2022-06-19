import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AdminModule } from '../admins/admin.module';
import { TokensModule } from '../tokens/tokens.module';
import { ArticlesModule } from "../articles/articles.module";

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.POSTGRES_HOST || 'localhost',
            port: parseInt(process.env.POSTGRES_PORT) || 5432,
            username: process.env.POSTGRES_USERNAME || 'postgres',
            password: process.env.POSTGRES_PASSWORD || 'password',
            database: process.env.POSTGRES_DB || 'nikantipin',
            entities: ['dist/**/**.entity{.ts,.js}'],
            autoLoadEntities: true,
        }),
        AdminModule,
        TokensModule,
        ArticlesModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
