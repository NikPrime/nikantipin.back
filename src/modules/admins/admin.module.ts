import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './admin.entity';
import { TokensModule } from '../tokens/tokens.module';

@Module({
    imports: [TypeOrmModule.forFeature([Admin]), TokensModule],
    controllers: [AdminController],
    providers: [AdminService],
    exports: [AdminService],
})
export class AdminModule {}
