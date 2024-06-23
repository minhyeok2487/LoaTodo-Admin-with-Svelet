import { get, post, put, del } from './api';

export async function getMemberDashboard() {
    return get("/admin/dash-board/member");
}

export async function getCharactersDashboard() {
    return get("/admin/dash-board/characters");
}