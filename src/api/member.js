import { get } from './api';

export async function getMemberList(page, size, searchParams) {
    const searchQuery = new URLSearchParams({
        page: page.toString(),
        size: size.toString(),
        ...(searchParams.username && { username: searchParams.username }),
        ...(searchParams.mainCharacter && { mainCharacter: searchParams.mainCharacter }),
        ...(searchParams.authProvider && { authProvider: searchParams.authProvider })
    }).toString();

    const response = await get(`/admin/members?${searchQuery}`);
    return response;
}