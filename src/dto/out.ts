export interface adminTokenDecodeDto {
    adminId: string;
    iat: number;
    exp: number;
}

export interface MetaData {
    page: number;
    limit: number;
    pages: number;
    total: number;
}