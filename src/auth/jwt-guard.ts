import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { TokensService } from '../modules/tokens/tokens.service';
import { AdminService } from '../modules/admins/admin.service';

@Injectable()
export class JwtGuard implements CanActivate {
    constructor(
        private reflector: Reflector,
        private tokensService: TokensService,
        private adminService: AdminService,
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const req = context.switchToHttp().getRequest();
        const token =
            (req.cookies['x-access-token'] as string) || (req.headers['x-access-token'] as string);

        let result;
        let tokens;

        try {
            result = await this.tokensService.verifyToken(token);
        } catch (e) {
            if ((e as Error).name === 'TokenExpiredError') {
                try {
                    const tokenHeader =
                        (req.cookies['x-access-token'] as string) ||
                        (req.headers['x-access-token'] as string);
                    if (tokenHeader) {
                        tokens = await this.tokensService.refreshToken(tokenHeader);
                        result = await this.tokensService.verifyToken(tokens.token);
                    }
                } catch (error) {
                    result = null;
                }
            }
        }
        if (!result) {
            throw new UnauthorizedException('token invalid or expired');
        }

        const admin = await this.adminService.getOne({ id: result.adminId });


        if (tokens) {
            const res = context.switchToHttp().getResponse();
            res.cookie('x-access-token', tokens.token, {
                httpOnly: true,
            });
        }

        req.admin = admin;
        return true;
    }
}