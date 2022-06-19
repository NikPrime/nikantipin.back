import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './articles.entity';
import { TokensModule } from '../tokens/tokens.module';
import { AdminModule } from '../admins/admin.module';

@Module({
  imports: [TypeOrmModule.forFeature([Article]), TokensModule, AdminModule],
  controllers: [ArticlesController],
  providers: [ArticlesService],
  exports: [ArticlesService],
})
export class ArticlesModule {}
