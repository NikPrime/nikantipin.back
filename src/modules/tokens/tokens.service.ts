import { Injectable } from '@nestjs/common';
import { sign, verify } from 'jsonwebtoken';

@Injectable()
export class TokensService {
    private getSecretKey(): string {
        return process.env.JWT_KEY || 'jwtKey';
    }

    private getExpiresIn(): string {
        return process.env.JWT_KEY_EXPIRES_IN || '30d';
    }

    async generateToken(adminId: number): Promise<string> {
        return new Promise((resolve, reject) => {
            const jwtSecretKey = this.getSecretKey();
            const expiresIn = this.getExpiresIn();
            sign({ adminId }, jwtSecretKey, { expiresIn }, (err, token) => {
                if (err) return reject(err);
                resolve(token);
            });
        });
    }

    async verifyToken(token: string) {
        return new Promise((resolve, reject) => {
            const jwtSecretKey = this.getSecretKey();
            return verify(token, jwtSecretKey, (err, data) => {
                if (err) return reject(err);
                resolve(data);
            });
        });
    }
}
