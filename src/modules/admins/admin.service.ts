import { BadRequestException, Injectable } from '@nestjs/common';
import { AdminRegisterDto } from './admin.dto';
import { Repository } from 'typeorm';
import { Admin } from './admin.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { TokensService } from '../tokens/tokens.service';

@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(Admin)
        private adminRepository: Repository<Admin>,
        private tokensService: TokensService,
    ) {}

    async login(data: AdminRegisterDto) {
        const admin = await this.adminRepository.findOne({ where: { email: data.email } });
        const isPasswordCorrect = await bcrypt.compare(data.password, admin.password);
        if (!admin || !isPasswordCorrect) throw new BadRequestException('Incorrect username or password');

        const token = await this.tokensService.generateToken(Number(admin.id));
        return { token };
    }
}
