import { Injectable } from '@nestjs/common';
import {AdminRegisterDto} from './admin.dto';
import {Repository} from 'typeorm';
import { Admin } from "./admin.entity";
import { InjectRepository } from "@nestjs/typeorm";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(Admin)
        private userRepository: Repository<Admin>,
    ) {}

    async login(data: AdminRegisterDto) {
        const hashPassword = await bcrypt.hash(data.password, 10);
    }
}
