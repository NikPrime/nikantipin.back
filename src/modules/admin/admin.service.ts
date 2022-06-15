import { BadRequestException, Injectable } from '@nestjs/common';
import { AdminRegisterDto } from './admin.dto';
import { Repository } from 'typeorm';
import { Admin } from './admin.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(Admin)
        private adminRepository: Repository<Admin>,
    ) {}

    async login(data: AdminRegisterDto) {
        const admin = await this.adminRepository.findOne({ where: { email: data.email } });
        const isPasswordCorrect = await bcrypt.compare(data.password, admin.password);
        if (!admin || !isPasswordCorrect) throw new BadRequestException('Incorrect username or password');

        return { success: true };
    }
}
