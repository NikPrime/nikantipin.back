import { PaginationQueryDto } from '../dto/in';
import { MetaData } from '../dto/out';

export const defaultPagination = {
    page: 1,
    limit: 10,
};

export function getPagination(pagination: PaginationQueryDto, count = 0): MetaData {
    const total = Number(count) || 0;
    const limit = Number(pagination.limit) || defaultPagination.limit;
    const page = Number(pagination.page) || defaultPagination.page;
    const pages = limit !== 0 ? Math.ceil(total / limit) : total;

    return {
        page,
        limit,
        pages,
        total,
    };
}

export const paginationParams = (page, limit) => {
    let pageNumber: number = page ? Number(page) || defaultPagination.page : defaultPagination.page;
    let limitNumber: number = limit
        ? Number(limit) || defaultPagination.limit
        : defaultPagination.limit;

    if (pageNumber < 1) pageNumber = defaultPagination.page;
    if (limitNumber < 1) limitNumber = defaultPagination.limit;

    const skip: number = limitNumber * (pageNumber - 1);

    return {
        page: pageNumber,
        limit: limitNumber,
        skip,
    };
};