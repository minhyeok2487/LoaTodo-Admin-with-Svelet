import { get } from './api';

export async function getCommentList(page, size, searchParams) {
    const searchQuery = new URLSearchParams({
        page: page.toString(),
        size: size.toString(),
        ...(searchParams.username && { username: searchParams.username }),
    }).toString();

    const response = await get(`/admin/comments?${searchQuery}`);
    return response;
}