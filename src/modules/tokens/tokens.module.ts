import {forwardRef, Module} from '@nestjs/common';
import { TokensService } from './tokens.service';
import { TokensController } from './tokens.controller';
import { AdminModule } from '../admins/admin.module';

@Module({
    imports: [forwardRef(() => AdminModule)],
    controllers: [TokensController],
    providers: [TokensService],
    exports: [TokensService],
})
export class TokensModule {}
