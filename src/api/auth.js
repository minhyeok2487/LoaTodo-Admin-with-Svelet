import { get, post, put, del } from './api';
import { writable } from 'svelte/store';

export async function getMember() {
    return get("/admin/member");
}

export const isAuthenticated = writable(false); // 초기값 false로 설정
export const member = writable(null);

export async function login() {
    try {
        const data = await getMember();
        if (data !== null) {
            isAuthenticated.set(true);
            member.set(data);
        }
    } catch (error) {
        console.error("Error while logging in:", error);
        isAuthenticated.set(false); // 로그인 실패 시 false로 설정
        member.set(null);
    }
}

export function logout() {
    isAuthenticated.set(false);
}
