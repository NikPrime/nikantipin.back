import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class AdminRegisterDto {
    @ApiProperty({
        format: 'email',
    })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({ minLength: 8 })
    @Length(6)
    @IsString()
    password: string;
}
