import {Body, Controller, HttpCode, HttpStatus, Post, Res} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { AdminService } from './admin.service';
import { AdminRegisterDto } from './admin.dto';
import { Response } from 'express';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) {}

    @Post('login')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: 200,
    })
    async login(@Body() registerDto: AdminRegisterDto, @Res() res: Response) {
        const result = await this.adminService.login(registerDto);
        res.cookie('x-access-token', result.token, {
            httpOnly: true,
        });

        return res.send(result);
    }
}
