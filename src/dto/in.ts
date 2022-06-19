import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PaginationQueryDto {
    @ApiProperty({ description: 'rows per page', required: false })
    @IsOptional()
    limit?: number;
    @ApiProperty({ description: 'current page', required: false })
    @IsOptional()
    page?: number;
}