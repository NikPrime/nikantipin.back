import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { AdminService } from './admin.service';
import { AdminRegisterDto } from './admin.dto';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) {}

    @Post('login')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: 200,
    })
    async login(@Body() registerDto: AdminRegisterDto) {
        return this.adminService.login(registerDto);
    }
}
